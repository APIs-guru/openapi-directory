import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServiceCapacityProviderStrategyDetails
/** 
 * Strategy item for the capacity provider strategy that the service uses.
**/
export class AwsEcsServiceCapacityProviderStrategyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Base" })
  base?: number;

  @Metadata({ data: "json, name=CapacityProvider" })
  capacityProvider?: string;

  @Metadata({ data: "json, name=Weight" })
  weight?: number;
}
