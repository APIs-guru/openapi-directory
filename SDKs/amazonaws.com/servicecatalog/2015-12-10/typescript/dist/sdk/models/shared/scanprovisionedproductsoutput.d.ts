import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedProductDetail } from "./provisionedproductdetail";
export declare class ScanProvisionedProductsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProducts?: ProvisionedProductDetail[];
}
