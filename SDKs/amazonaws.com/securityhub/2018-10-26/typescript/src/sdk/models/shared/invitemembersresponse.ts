import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";



export class InviteMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UnprocessedAccounts", elemType: Result })
  unprocessedAccounts?: Result[];
}
