import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_storage_overage" })
  allowStorageOverage?: boolean;

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


export class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=tier" })
  tier?: Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
