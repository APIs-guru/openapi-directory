import { SpeakeasyBase } from "../../../internal/utils";
import { IntegrationTypeEnum } from "./integrationtypeenum";
/**
 * Contains details about a product.
**/
export declare class Product extends SpeakeasyBase {
    activationUrl?: string;
    categories?: string[];
    companyName?: string;
    description?: string;
    integrationTypes?: IntegrationTypeEnum[];
    marketplaceUrl?: string;
    productArn: string;
    productName?: string;
    productSubscriptionResourcePolicy?: string;
}
