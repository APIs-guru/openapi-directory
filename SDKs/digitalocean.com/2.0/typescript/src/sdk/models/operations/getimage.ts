import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: any;
}


export class GetImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagePathParams;
}


export class GetImage200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage;
}


export class GetImage401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getImage200ApplicationJsonObject?: GetImage200ApplicationJson;

  @Metadata()
  getImage401ApplicationJsonObject?: GetImage401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
