import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IamUserAccessToBillingEnum } from "./iamuseraccesstobillingenum";
import { Tag } from "./tag";


export class CreateGovCloudAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountName" })
  accountName: string;

  @Metadata({ data: "json, name=Email" })
  email: string;

  @Metadata({ data: "json, name=IamUserAccessToBilling" })
  iamUserAccessToBilling?: IamUserAccessToBillingEnum;

  @Metadata({ data: "json, name=RoleName" })
  roleName?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
