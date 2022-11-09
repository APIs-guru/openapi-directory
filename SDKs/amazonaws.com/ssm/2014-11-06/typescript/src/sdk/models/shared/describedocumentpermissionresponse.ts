import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountSharingInfo } from "./accountsharinginfo";


export class DescribeDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=AccountSharingInfoList", elemType: shared.AccountSharingInfo })
  accountSharingInfoList?: AccountSharingInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
