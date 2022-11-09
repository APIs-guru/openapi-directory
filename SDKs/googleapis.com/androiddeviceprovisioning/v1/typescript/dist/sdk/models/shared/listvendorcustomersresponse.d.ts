import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Company } from "./company";
/**
 * Response message to list customers of the vendor.
**/
export declare class ListVendorCustomersResponse extends SpeakeasyBase {
    customers?: Company[];
    nextPageToken?: string;
    totalSize?: number;
}
