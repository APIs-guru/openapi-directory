import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInstanceSizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetInstanceSizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstanceSizePathParams;
}


export class GetInstanceSize200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance_size" })
  instanceSize?: shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems;
}


export class GetInstanceSize401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInstanceSizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInstanceSize200ApplicationJsonObject?: GetInstanceSize200ApplicationJson;

  @Metadata()
  getInstanceSize401ApplicationJsonObject?: GetInstanceSize401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
