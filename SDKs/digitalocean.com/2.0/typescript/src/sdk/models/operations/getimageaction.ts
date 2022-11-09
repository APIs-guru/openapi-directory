import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImageActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class GetImageActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImageActionPathParams;
}


export class GetImageAction401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetImageActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getImageAction401ApplicationJsonObject?: GetImageAction401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
}
