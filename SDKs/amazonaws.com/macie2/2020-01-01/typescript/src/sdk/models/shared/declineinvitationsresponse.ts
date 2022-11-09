import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnprocessedAccount } from "./unprocessedaccount";


export class DeclineInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=unprocessedAccounts", elemType: shared.UnprocessedAccount })
  unprocessedAccounts?: UnprocessedAccount[];
}
