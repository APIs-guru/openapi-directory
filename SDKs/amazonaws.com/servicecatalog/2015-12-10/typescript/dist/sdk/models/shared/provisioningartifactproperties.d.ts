import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactTypeEnum } from "./provisioningartifacttypeenum";
/**
 * Information about a provisioning artifact (also known as a version) for a product.
**/
export declare class ProvisioningArtifactProperties extends SpeakeasyBase {
    description?: string;
    disableTemplateValidation?: boolean;
    info: Map<string, string>;
    name?: string;
    type?: ProvisioningArtifactTypeEnum;
}
