import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
import { Result } from "./result";



export class GetMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Members", elemType: Member })
  members?: Member[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedAccounts", elemType: Result })
  unprocessedAccounts?: Result[];
}
