import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alias } from "./alias";
import { AntiSpam } from "./antispam";
import { MailZoneAccount } from "./mailzoneaccount";
import { CatchAll } from "./catchall";
import { SmtpDomain } from "./smtpdomain";


export class MailZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases", elemType: shared.Alias })
  aliases?: Alias[];

  @Metadata({ data: "json, name=anti_spam" })
  antiSpam?: AntiSpam;

  @Metadata({ data: "json, name=available_accounts", elemType: shared.MailZoneAccount })
  availableAccounts?: MailZoneAccount[];

  @Metadata({ data: "json, name=catch_all" })
  catchAll?: CatchAll;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=smtp_domains", elemType: shared.SmtpDomain })
  smtpDomains?: SmtpDomain[];
}
