import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListLicensesRequest extends SpeakeasyBase {
    filters?: Filter[];
    licenseArns?: string[];
    maxResults?: number;
    nextToken?: string;
}
