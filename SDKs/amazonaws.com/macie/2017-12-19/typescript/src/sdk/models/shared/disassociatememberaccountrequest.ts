import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateMemberAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberAccountId" })
  memberAccountId: string;
}
