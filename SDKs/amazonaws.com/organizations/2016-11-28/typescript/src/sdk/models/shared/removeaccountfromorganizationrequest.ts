import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveAccountFromOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;
}
