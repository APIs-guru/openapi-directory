import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountLimit } from "./accountlimit";
import { AccountUsage } from "./accountusage";



export class GetAccountSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountLimit" })
  accountLimit?: AccountLimit;

  @SpeakeasyMetadata({ data: "json, name=AccountUsage" })
  accountUsage?: AccountUsage;
}
