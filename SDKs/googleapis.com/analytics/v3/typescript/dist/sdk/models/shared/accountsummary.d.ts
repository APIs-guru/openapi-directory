import { SpeakeasyBase } from "../../../internal/utils";
import { WebPropertySummary } from "./webpropertysummary";
/**
 * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
**/
export declare class AccountSummary extends SpeakeasyBase {
    id?: string;
    kind?: string;
    name?: string;
    starred?: boolean;
    webProperties?: WebPropertySummary[];
}
