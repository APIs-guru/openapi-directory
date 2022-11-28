import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamUserAccessToBillingEnum } from "./iamuseraccesstobillingenum";
import { Tag } from "./tag";



export class CreateGovCloudAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=IamUserAccessToBilling" })
  iamUserAccessToBilling?: IamUserAccessToBillingEnum;

  @SpeakeasyMetadata({ data: "json, name=RoleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
