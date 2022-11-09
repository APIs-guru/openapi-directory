import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactProperties } from "./provisioningartifactproperties";
export declare class CreateProvisioningArtifactInput extends SpeakeasyBase {
    acceptLanguage?: string;
    idempotencyToken: string;
    parameters: ProvisioningArtifactProperties;
    productId: string;
}
