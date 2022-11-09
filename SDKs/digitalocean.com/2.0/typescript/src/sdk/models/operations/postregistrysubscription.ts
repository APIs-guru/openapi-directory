import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostRegistrySubscriptionRequestBodyTierSlugEnum {
    Starter = "starter"
,    Basic = "basic"
,    Professional = "professional"
}


export class PostRegistrySubscriptionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tier_slug" })
  tierSlug?: PostRegistrySubscriptionRequestBodyTierSlugEnum;
}


export class PostRegistrySubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostRegistrySubscriptionRequestBody;
}


export class PostRegistrySubscription401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostRegistrySubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postRegistrySubscription401ApplicationJsonObject?: PostRegistrySubscription401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1?: shared.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1;
}
