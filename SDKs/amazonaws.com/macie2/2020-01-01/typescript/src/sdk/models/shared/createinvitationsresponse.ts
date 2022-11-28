import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedAccount } from "./unprocessedaccount";



export class CreateInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unprocessedAccounts", elemType: UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}
