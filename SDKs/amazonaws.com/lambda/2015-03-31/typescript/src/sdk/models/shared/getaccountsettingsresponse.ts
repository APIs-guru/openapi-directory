import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountLimit } from "./accountlimit";
import { AccountUsage } from "./accountusage";


export class GetAccountSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountLimit" })
  accountLimit?: AccountLimit;

  @Metadata({ data: "json, name=AccountUsage" })
  accountUsage?: AccountUsage;
}
