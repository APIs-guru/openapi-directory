import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class UpdateImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateImagePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0;
}


export class UpdateImage200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage;
}


export class UpdateImage401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateImage200ApplicationJsonObject?: UpdateImage200ApplicationJson;

  @Metadata()
  updateImage401ApplicationJsonObject?: UpdateImage401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
