import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UntagResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: string;
}


export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UntagResourcePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21tags1Percent7BtagIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema;
}


export class UntagResource401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UntagResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  untagResource401ApplicationJsonObject?: UntagResource401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
