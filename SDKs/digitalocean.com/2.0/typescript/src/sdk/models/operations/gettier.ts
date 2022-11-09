import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetTierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTierPathParams;
}


export class GetTier200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=tier" })
  tier?: shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems;
}


export class GetTier401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetTierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTier200ApplicationJsonObject?: GetTier200ApplicationJson;

  @Metadata()
  getTier401ApplicationJsonObject?: GetTier401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
