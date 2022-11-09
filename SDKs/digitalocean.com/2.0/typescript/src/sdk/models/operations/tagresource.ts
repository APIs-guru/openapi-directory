import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: string;
}


export class TagResourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resources" })
  resources: any[];
}


export class TagResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagResourcePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: TagResourceRequestBody;
}


export class TagResource401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class TagResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagResource401ApplicationJsonObject?: TagResource401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
