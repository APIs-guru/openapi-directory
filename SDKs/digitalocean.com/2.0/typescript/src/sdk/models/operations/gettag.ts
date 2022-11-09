import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag_id" })
  tagId: string;
}


export class GetTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagPathParams;
}


export class GetTag200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems;
}


export class GetTag401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTag200ApplicationJsonObject?: GetTag200ApplicationJson;

  @Metadata()
  getTag401ApplicationJsonObject?: GetTag401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
