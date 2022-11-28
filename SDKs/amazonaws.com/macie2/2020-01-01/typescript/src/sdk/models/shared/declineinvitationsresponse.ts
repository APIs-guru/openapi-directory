import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedAccount } from "./unprocessedaccount";



export class DeclineInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unprocessedAccounts", elemType: UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}
