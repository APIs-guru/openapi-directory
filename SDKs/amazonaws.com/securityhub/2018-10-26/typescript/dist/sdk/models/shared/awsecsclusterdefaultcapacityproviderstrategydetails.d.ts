import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
**/
export declare class AwsEcsClusterDefaultCapacityProviderStrategyDetails extends SpeakeasyBase {
    base?: number;
    capacityProvider?: string;
    weight?: number;
}
