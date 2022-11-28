import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { UpdateProvisioningPreferences } from "./updateprovisioningpreferences";
import { Tag } from "./tag";
export declare class UpdateProvisionedProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    pathId?: string;
    pathName?: string;
    productId?: string;
    productName?: string;
    provisionedProductId?: string;
    provisionedProductName?: string;
    provisioningArtifactId?: string;
    provisioningArtifactName?: string;
    provisioningParameters?: UpdateProvisioningParameter[];
    provisioningPreferences?: UpdateProvisioningPreferences;
    tags?: Tag[];
    updateToken: string;
}
