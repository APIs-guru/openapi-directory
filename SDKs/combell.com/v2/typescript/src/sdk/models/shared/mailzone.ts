import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { AntiSpam } from "./antispam";
import { MailZoneAccount } from "./mailzoneaccount";
import { CatchAll } from "./catchall";
import { SmtpDomain } from "./smtpdomain";



export class MailZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases", elemType: Alias })
  aliases?: Alias[];

  @SpeakeasyMetadata({ data: "json, name=anti_spam" })
  antiSpam?: AntiSpam;

  @SpeakeasyMetadata({ data: "json, name=available_accounts", elemType: MailZoneAccount })
  availableAccounts?: MailZoneAccount[];

  @SpeakeasyMetadata({ data: "json, name=catch_all" })
  catchAll?: CatchAll;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smtp_domains", elemType: SmtpDomain })
  smtpDomains?: SmtpDomain[];
}
