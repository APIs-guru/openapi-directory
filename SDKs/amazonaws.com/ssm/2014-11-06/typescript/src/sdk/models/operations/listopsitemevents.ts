import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOpsItemEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListOpsItemEventsXAmzTargetEnum {
    AmazonSsmListOpsItemEvents = "AmazonSSM.ListOpsItemEvents"
}


export class ListOpsItemEventsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOpsItemEventsXAmzTargetEnum;
}


export class ListOpsItemEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListOpsItemEventsQueryParams;

  @Metadata()
  headers: ListOpsItemEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOpsItemEventsRequest;
}


export class ListOpsItemEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  listOpsItemEventsResponse?: shared.ListOpsItemEventsResponse;

  @Metadata()
  opsItemInvalidParameterException?: any;

  @Metadata()
  opsItemLimitExceededException?: any;

  @Metadata()
  opsItemNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
