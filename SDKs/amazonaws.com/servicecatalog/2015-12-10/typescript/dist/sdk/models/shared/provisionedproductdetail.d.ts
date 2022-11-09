import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductStatusEnum } from "./provisionedproductstatusenum";
/**
 * Information about a provisioned product.
**/
export declare class ProvisionedProductDetail extends SpeakeasyBase {
    arn?: string;
    createdTime?: Date;
    id?: string;
    idempotencyToken?: string;
    lastProvisioningRecordId?: string;
    lastRecordId?: string;
    lastSuccessfulProvisioningRecordId?: string;
    launchRoleArn?: string;
    name?: string;
    productId?: string;
    provisioningArtifactId?: string;
    status?: ProvisionedProductStatusEnum;
    statusMessage?: string;
    type?: string;
}
