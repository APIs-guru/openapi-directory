import { SpeakeasyBase } from "../../../internal/utils";
import { ProductInformationFilter } from "./productinformationfilter";
/**
 * Describes product information for a license configuration.
**/
export declare class ProductInformation extends SpeakeasyBase {
    productInformationFilterList: ProductInformationFilter[];
    resourceType: string;
}
