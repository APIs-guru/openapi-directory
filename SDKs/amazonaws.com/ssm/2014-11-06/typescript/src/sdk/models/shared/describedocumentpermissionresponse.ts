import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountSharingInfo } from "./accountsharinginfo";



export class DescribeDocumentPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=AccountSharingInfoList", elemType: AccountSharingInfo })
  accountSharingInfoList?: AccountSharingInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
