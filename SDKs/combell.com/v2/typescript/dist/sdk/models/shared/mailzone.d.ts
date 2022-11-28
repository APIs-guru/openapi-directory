import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { AntiSpam } from "./antispam";
import { MailZoneAccount } from "./mailzoneaccount";
import { CatchAll } from "./catchall";
import { SmtpDomain } from "./smtpdomain";
export declare class MailZone extends SpeakeasyBase {
    aliases?: Alias[];
    antiSpam?: AntiSpam;
    availableAccounts?: MailZoneAccount[];
    catchAll?: CatchAll;
    enabled?: boolean;
    name?: string;
    smtpDomains?: SmtpDomain[];
}
