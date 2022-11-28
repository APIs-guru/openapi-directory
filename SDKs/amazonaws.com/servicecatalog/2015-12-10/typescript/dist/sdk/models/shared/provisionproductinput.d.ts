import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningParameter } from "./provisioningparameter";
import { ProvisioningPreferences } from "./provisioningpreferences";
import { Tag } from "./tag";
export declare class ProvisionProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    notificationArns?: string[];
    pathId?: string;
    pathName?: string;
    productId?: string;
    productName?: string;
    provisionToken: string;
    provisionedProductName: string;
    provisioningArtifactId?: string;
    provisioningArtifactName?: string;
    provisioningParameters?: ProvisioningParameter[];
    provisioningPreferences?: ProvisioningPreferences;
    tags?: Tag[];
}
