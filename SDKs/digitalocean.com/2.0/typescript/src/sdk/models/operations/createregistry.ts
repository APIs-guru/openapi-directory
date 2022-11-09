import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRegistryRequestBodySubscriptionTierSlugEnum {
    Starter = "starter"
,    Basic = "basic"
,    Professional = "professional"
}


export class CreateRegistryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=subscription_tier_slug" })
  subscriptionTierSlug: CreateRegistryRequestBodySubscriptionTierSlugEnum;
}


export class CreateRegistryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRegistryRequestBody;
}


export class CreateRegistry401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateRegistryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createRegistry201ApplicationJsonAny?: any;

  @Metadata()
  createRegistry401ApplicationJsonObject?: CreateRegistry401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
