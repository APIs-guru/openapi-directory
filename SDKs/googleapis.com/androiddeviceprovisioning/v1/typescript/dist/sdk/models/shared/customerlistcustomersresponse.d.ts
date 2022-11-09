import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Company } from "./company";
/**
 * Response message for listing my customers.
**/
export declare class CustomerListCustomersResponse extends SpeakeasyBase {
    customers?: Company[];
    nextPageToken?: string;
}
