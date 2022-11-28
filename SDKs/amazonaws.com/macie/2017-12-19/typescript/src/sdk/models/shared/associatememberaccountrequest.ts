import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateMemberAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberAccountId" })
  memberAccountId: string;
}
