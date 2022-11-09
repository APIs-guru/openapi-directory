import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateAppSpecRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_id" })
  appId?: string;

  @Metadata({ data: "json, name=spec" })
  spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class ValidateAppSpecRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: ValidateAppSpecRequestBody;
}


export class ValidateAppSpec200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_cost" })
  appCost?: number;

  @Metadata({ data: "json, name=app_is_static" })
  appIsStatic?: boolean;

  @Metadata({ data: "json, name=app_name_available" })
  appNameAvailable?: boolean;

  @Metadata({ data: "json, name=app_name_suggestion" })
  appNameSuggestion?: string;

  @Metadata({ data: "json, name=app_tier_downgrade_cost" })
  appTierDowngradeCost?: number;

  @Metadata({ data: "json, name=existing_static_apps" })
  existingStaticApps?: string;

  @Metadata({ data: "json, name=spec" })
  spec?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}


export class ValidateAppSpec401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ValidateAppSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  validateAppSpec200ApplicationJsonObject?: ValidateAppSpec200ApplicationJson;

  @Metadata()
  validateAppSpec401ApplicationJsonObject?: ValidateAppSpec401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
