import { SpeakeasyBase } from "../../../internal/utils";
import { IamUserAccessToBillingEnum } from "./iamuseraccesstobillingenum";
import { Tag } from "./tag";
export declare class CreateAccountRequest extends SpeakeasyBase {
    accountName: string;
    email: string;
    iamUserAccessToBilling?: IamUserAccessToBillingEnum;
    roleName?: string;
    tags?: Tag[];
}
