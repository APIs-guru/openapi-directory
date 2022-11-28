import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveAccountFromOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;
}
