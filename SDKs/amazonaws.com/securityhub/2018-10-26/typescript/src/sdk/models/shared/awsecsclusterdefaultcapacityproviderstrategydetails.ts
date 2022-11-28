import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsClusterDefaultCapacityProviderStrategyDetails
/** 
 * The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
**/
export class AwsEcsClusterDefaultCapacityProviderStrategyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Base" })
  base?: number;

  @SpeakeasyMetadata({ data: "json, name=CapacityProvider" })
  capacityProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=Weight" })
  weight?: number;
}
