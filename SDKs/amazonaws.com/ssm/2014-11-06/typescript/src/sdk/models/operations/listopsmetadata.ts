import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListOpsMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListOpsMetadataXAmzTargetEnum {
    AmazonSsmListOpsMetadata = "AmazonSSM.ListOpsMetadata"
}


export class ListOpsMetadataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListOpsMetadataXAmzTargetEnum;
}


export class ListOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOpsMetadataQueryParams;

  @SpeakeasyMetadata()
  headers: ListOpsMetadataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListOpsMetadataRequest;
}


export class ListOpsMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  listOpsMetadataResult?: shared.ListOpsMetadataResult;

  @SpeakeasyMetadata()
  opsMetadataInvalidArgumentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
