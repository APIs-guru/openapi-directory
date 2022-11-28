import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServiceCapacityProviderStrategyDetails
/** 
 * Strategy item for the capacity provider strategy that the service uses.
**/
export class AwsEcsServiceCapacityProviderStrategyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Base" })
  base?: number;

  @SpeakeasyMetadata({ data: "json, name=CapacityProvider" })
  capacityProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=Weight" })
  weight?: number;
}
