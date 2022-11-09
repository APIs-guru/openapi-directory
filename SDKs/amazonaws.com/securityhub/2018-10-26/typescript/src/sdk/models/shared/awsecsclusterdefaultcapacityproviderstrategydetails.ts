import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsClusterDefaultCapacityProviderStrategyDetails
/** 
 * The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
**/
export class AwsEcsClusterDefaultCapacityProviderStrategyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Base" })
  base?: number;

  @Metadata({ data: "json, name=CapacityProvider" })
  capacityProvider?: string;

  @Metadata({ data: "json, name=Weight" })
  weight?: number;
}
