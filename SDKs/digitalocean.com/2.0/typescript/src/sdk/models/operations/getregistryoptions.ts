import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum {
    OverRepositoryLimit = "OverRepositoryLimit"
,    OverStorageLimit = "OverStorageLimit"
}


export class GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_storage_overage" })
  allowStorageOverage?: boolean;

  @Metadata({ data: "json, name=eligibility_reasons" })
  eligibilityReasons?: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum[];

  @Metadata({ data: "json, name=eligible" })
  eligible?: boolean;

  @Metadata({ data: "json, name=included_bandwidth_bytes" })
  includedBandwidthBytes?: number;

  @Metadata({ data: "json, name=included_repositories" })
  includedRepositories?: number;

  @Metadata({ data: "json, name=included_storage_bytes" })
  includedStorageBytes?: number;

  @Metadata({ data: "json, name=monthly_price_in_cents" })
  monthlyPriceInCents?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}


export class GetRegistryOptions200ApplicationJsonOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription_tiers", elemType: operations.GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers })
  subscriptionTiers?: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers[];
}


export class GetRegistryOptions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: GetRegistryOptions200ApplicationJsonOptions;
}


export class GetRegistryOptions401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetRegistryOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRegistryOptions200ApplicationJsonObject?: GetRegistryOptions200ApplicationJson;

  @Metadata()
  getRegistryOptions401ApplicationJsonObject?: GetRegistryOptions401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
