import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDropletActionByTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;
}


export class PostDropletActionByTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDropletActionByTagQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostDropletActionByTag401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostDropletActionByTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postDropletActionByTag201ApplicationJsonAny?: any;

  @Metadata()
  postDropletActionByTag401ApplicationJsonObject?: PostDropletActionByTag401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
