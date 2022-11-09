import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEventSourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EventSource" })
  eventSource?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;
}


export class ListEventSourcesHeaders extends SpeakeasyBase {
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
}


export class ListEventSourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEventSourcesQueryParams;

  @Metadata()
  headers: ListEventSourcesHeaders;
}


export class ListEventSourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: shared.InvalidParameterValueException;

  @Metadata()
  listEventSourcesResponse?: shared.ListEventSourcesResponse;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  serviceException?: shared.ServiceException;

  @Metadata()
  statusCode: number;
}
