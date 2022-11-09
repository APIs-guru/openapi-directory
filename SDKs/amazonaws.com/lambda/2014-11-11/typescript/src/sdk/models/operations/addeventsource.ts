import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddEventSourceHeaders extends SpeakeasyBase {
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


export class AddEventSourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchSize" })
  batchSize?: number;

  @Metadata({ data: "json, name=EventSource" })
  eventSource: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=Role" })
  role: string;
}


export class AddEventSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddEventSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddEventSourceRequestBody;
}


export class AddEventSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSourceConfiguration?: shared.EventSourceConfiguration;

  @Metadata()
  invalidParameterValueException?: shared.InvalidParameterValueException;

  @Metadata()
  serviceException?: shared.ServiceException;

  @Metadata()
  statusCode: number;
}
