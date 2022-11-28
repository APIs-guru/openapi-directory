import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAccountsForProvisionedPermissionSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
