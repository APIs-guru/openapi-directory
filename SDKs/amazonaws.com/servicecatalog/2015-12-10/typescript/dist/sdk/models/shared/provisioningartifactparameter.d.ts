import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterConstraints } from "./parameterconstraints";
/**
 * Information about a parameter used to provision a product.
**/
export declare class ProvisioningArtifactParameter extends SpeakeasyBase {
    defaultValue?: string;
    description?: string;
    isNoEcho?: boolean;
    parameterConstraints?: ParameterConstraints;
    parameterKey?: string;
    parameterType?: string;
}
