import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOpsMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListOpsMetadataXAmzTargetEnum {
    AmazonSsmListOpsMetadata = "AmazonSSM.ListOpsMetadata"
}


export class ListOpsMetadataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListOpsMetadataXAmzTargetEnum;
}


export class ListOpsMetadataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListOpsMetadataQueryParams;

  @Metadata()
  headers: ListOpsMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOpsMetadataRequest;
}


export class ListOpsMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  listOpsMetadataResult?: shared.ListOpsMetadataResult;

  @Metadata()
  opsMetadataInvalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
