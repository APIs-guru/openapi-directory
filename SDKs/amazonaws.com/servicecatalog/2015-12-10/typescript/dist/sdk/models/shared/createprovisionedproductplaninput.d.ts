import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { Tag } from "./tag";
export declare class CreateProvisionedProductPlanInput extends SpeakeasyBase {
    acceptLanguage?: string;
    idempotencyToken: string;
    notificationArns?: string[];
    pathId?: string;
    planName: string;
    planType: ProvisionedProductPlanTypeEnum;
    productId: string;
    provisionedProductName: string;
    provisioningArtifactId: string;
    provisioningParameters?: UpdateProvisioningParameter[];
    tags?: Tag[];
}
