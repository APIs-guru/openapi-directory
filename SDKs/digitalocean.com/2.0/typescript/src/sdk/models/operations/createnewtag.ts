import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateNewTagRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems;
}


export class CreateNewTag400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: string;

  @Metadata({ data: "json, name=messages" })
  messages?: string[];

  @Metadata({ data: "json, name=root_causes" })
  rootCauses: string[];
}


export class CreateNewTag401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateNewTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNewTag201ApplicationJsonAny?: any;

  @Metadata()
  createNewTag400ApplicationJsonObject?: CreateNewTag400ApplicationJson;

  @Metadata()
  createNewTag401ApplicationJsonObject?: CreateNewTag401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
