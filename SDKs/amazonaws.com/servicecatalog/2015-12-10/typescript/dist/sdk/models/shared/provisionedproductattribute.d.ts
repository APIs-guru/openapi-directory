import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";
import { Tag } from "./tag";
/**
 * Information about a provisioned product.
**/
export declare class ProvisionedProductAttribute extends SpeakeasyBase {
    arn?: string;
    createdTime?: Date;
    id?: string;
    idempotencyToken?: string;
    lastProvisioningRecordId?: string;
    lastRecordId?: string;
    lastSuccessfulProvisioningRecordId?: string;
    name?: string;
    physicalId?: string;
    productId?: string;
    productName?: string;
    provisioningArtifactId?: string;
    provisioningArtifactName?: string;
    status?: ProvisionedProductStatusEnum;
    statusMessage?: string;
    tags?: Tag[];
    type?: string;
    userArn?: string;
    userArnSession?: string;
}
