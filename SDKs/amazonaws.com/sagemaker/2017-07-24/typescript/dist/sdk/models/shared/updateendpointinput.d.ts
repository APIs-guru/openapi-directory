import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
import { VariantProperty } from "./variantproperty";
export declare class UpdateEndpointInput extends SpeakeasyBase {
    deploymentConfig?: DeploymentConfig;
    endpointConfigName: string;
    endpointName: string;
    excludeRetainedVariantProperties?: VariantProperty[];
    retainAllVariantProperties?: boolean;
}
