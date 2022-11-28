import { SpeakeasyBase } from "../../../internal/utils";
import { AssumedRole } from "./assumedrole";
import { AwsAccount } from "./awsaccount";
import { AwsService } from "./awsservice";
import { FederatedUser } from "./federateduser";
import { IamUser } from "./iamuser";
import { UserIdentityRoot } from "./useridentityroot";
import { UserIdentityTypeEnum } from "./useridentitytypeenum";
/**
 * Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
**/
export declare class UserIdentity extends SpeakeasyBase {
    assumedRole?: AssumedRole;
    awsAccount?: AwsAccount;
    awsService?: AwsService;
    federatedUser?: FederatedUser;
    iamUser?: IamUser;
    root?: UserIdentityRoot;
    type?: UserIdentityTypeEnum;
}
