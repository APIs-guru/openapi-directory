import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Result } from "./result";


export class DeleteMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UnprocessedAccounts", elemType: shared.Result })
  unprocessedAccounts?: Result[];
}
