import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostImageActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}

export enum PostImageActionRequestBody1TypeEnum {
    Convert = "convert"
,    Transfer = "transfer"
}


export class PostImageActionRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PostImageActionRequestBody1TypeEnum;
}

export enum PostImageActionRequestBody2TypeEnum {
    Convert = "convert"
,    Transfer = "transfer"
}


export class PostImageActionRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=type" })
  type: PostImageActionRequestBody2TypeEnum;
}


export class PostImageActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostImageActionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostImageAction401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostImageActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postImageAction401ApplicationJsonObject?: PostImageAction401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
}
