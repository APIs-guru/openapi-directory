import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum {
    Noeviction = "noeviction"
,    AllkeysLru = "allkeys_lru"
,    AllkeysRandom = "allkeys_random"
,    VolatileLru = "volatile_lru"
,    VolatileRandom = "volatile_random"
,    VolatileTtl = "volatile_ttl"
}


export class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=eviction_policy" })
  evictionPolicy: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum;
}
