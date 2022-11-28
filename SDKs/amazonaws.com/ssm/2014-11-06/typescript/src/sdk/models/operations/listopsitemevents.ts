import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListOpsItemEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListOpsItemEventsXAmzTargetEnum {
    AmazonSsmListOpsItemEvents = "AmazonSSM.ListOpsItemEvents"
}


export class ListOpsItemEventsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOpsItemEventsXAmzTargetEnum;
}


export class ListOpsItemEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOpsItemEventsQueryParams;

  @SpeakeasyMetadata()
  headers: ListOpsItemEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListOpsItemEventsRequest;
}


export class ListOpsItemEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  listOpsItemEventsResponse?: shared.ListOpsItemEventsResponse;

  @SpeakeasyMetadata()
  opsItemInvalidParameterException?: any;

  @SpeakeasyMetadata()
  opsItemLimitExceededException?: any;

  @SpeakeasyMetadata()
  opsItemNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
