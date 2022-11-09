import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAccountsForProvisionedPermissionSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
