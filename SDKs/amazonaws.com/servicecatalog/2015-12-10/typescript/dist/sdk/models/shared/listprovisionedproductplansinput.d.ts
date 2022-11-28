import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
export declare class ListProvisionedProductPlansInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accessLevelFilter?: AccessLevelFilter;
    pageSize?: number;
    pageToken?: string;
    provisionProductId?: string;
}
