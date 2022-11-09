import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetryDestroyWithAssociatedResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class RetryDestroyWithAssociatedResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetryDestroyWithAssociatedResourcePathParams;
}


export class RetryDestroyWithAssociatedResource401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RetryDestroyWithAssociatedResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  retryDestroyWithAssociatedResource401ApplicationJsonObject?: RetryDestroyWithAssociatedResource401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
