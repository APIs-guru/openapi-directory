import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MailZoneAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
