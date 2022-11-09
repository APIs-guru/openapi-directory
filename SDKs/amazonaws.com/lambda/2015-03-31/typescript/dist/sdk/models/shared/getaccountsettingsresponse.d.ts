import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountLimit } from "./accountlimit";
import { AccountUsage } from "./accountusage";
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    accountLimit?: AccountLimit;
    accountUsage?: AccountUsage;
}
