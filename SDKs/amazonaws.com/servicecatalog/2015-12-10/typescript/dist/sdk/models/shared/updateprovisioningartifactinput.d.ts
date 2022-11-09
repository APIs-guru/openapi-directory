import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";
export declare class UpdateProvisioningArtifactInput extends SpeakeasyBase {
    acceptLanguage?: string;
    active?: boolean;
    description?: string;
    guidance?: ProvisioningArtifactGuidanceEnum;
    name?: string;
    productId: string;
    provisioningArtifactId: string;
}
