import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Response message of all customers related to this partner.
**/
export declare class ListCustomersResponse extends SpeakeasyBase {
    customers?: Company[];
    nextPageToken?: string;
    totalSize?: number;
}
