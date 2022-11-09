import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PurgeCdnCachePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cdn_id" })
  cdnId: string;
}


export class PurgeCdnCacheRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=files" })
  files: string[];
}


export class PurgeCdnCacheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PurgeCdnCachePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PurgeCdnCacheRequestBody;
}


export class PurgeCdnCache401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PurgeCdnCacheResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  purgeCdnCache401ApplicationJsonObject?: PurgeCdnCache401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
