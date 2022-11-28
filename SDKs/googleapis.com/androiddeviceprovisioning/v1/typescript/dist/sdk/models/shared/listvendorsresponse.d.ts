import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Response message to list vendors of the partner.
**/
export declare class ListVendorsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    totalSize?: number;
    vendors?: Company[];
}
