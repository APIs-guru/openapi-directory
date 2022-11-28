import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateMemberAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberAccountId" })
  memberAccountId: string;
}
