import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListOpsItemRelatedItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListOpsItemRelatedItemsXAmzTargetEnum {
    AmazonSsmListOpsItemRelatedItems = "AmazonSSM.ListOpsItemRelatedItems"
}


export class ListOpsItemRelatedItemsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOpsItemRelatedItemsXAmzTargetEnum;
}


export class ListOpsItemRelatedItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOpsItemRelatedItemsQueryParams;

  @SpeakeasyMetadata()
  headers: ListOpsItemRelatedItemsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListOpsItemRelatedItemsRequest;
}


export class ListOpsItemRelatedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  listOpsItemRelatedItemsResponse?: shared.ListOpsItemRelatedItemsResponse;

  @SpeakeasyMetadata()
  opsItemInvalidParameterException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
