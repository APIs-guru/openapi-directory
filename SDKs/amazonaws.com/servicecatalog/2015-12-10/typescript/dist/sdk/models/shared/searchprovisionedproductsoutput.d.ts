import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductAttribute } from "./provisionedproductattribute";
export declare class SearchProvisionedProductsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProducts?: ProvisionedProductAttribute[];
    totalResultsCount?: number;
}
