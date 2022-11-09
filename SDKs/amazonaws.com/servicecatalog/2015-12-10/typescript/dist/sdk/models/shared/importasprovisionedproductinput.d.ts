import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ImportAsProvisionedProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    idempotencyToken: string;
    physicalId: string;
    productId: string;
    provisionedProductName: string;
    provisioningArtifactId: string;
}
