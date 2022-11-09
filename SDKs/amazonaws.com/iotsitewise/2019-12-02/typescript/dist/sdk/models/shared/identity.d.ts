import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupIdentity } from "./groupidentity";
import { IamRoleIdentity } from "./iamroleidentity";
import { IamUserIdentity } from "./iamuseridentity";
import { UserIdentity } from "./useridentity";
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
export declare class Identity extends SpeakeasyBase {
    group?: GroupIdentity;
    iamRole?: IamRoleIdentity;
    iamUser?: IamUserIdentity;
    user?: UserIdentity;
}
