import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MailZoneAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
