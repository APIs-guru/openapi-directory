import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
export declare class ScanProvisionedProductsInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accessLevelFilter?: AccessLevelFilter;
    pageSize?: number;
    pageToken?: string;
}
