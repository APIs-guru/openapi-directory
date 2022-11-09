import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssumedRole } from "./assumedrole";
import { AwsAccount } from "./awsaccount";
import { AwsService } from "./awsservice";
import { FederatedUser } from "./federateduser";
import { IamUser } from "./iamuser";
import { UserIdentityRoot } from "./useridentityroot";
import { UserIdentityTypeEnum } from "./useridentitytypeenum";


// UserIdentity
/** 
 * Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
**/
export class UserIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=assumedRole" })
  assumedRole?: AssumedRole;

  @Metadata({ data: "json, name=awsAccount" })
  awsAccount?: AwsAccount;

  @Metadata({ data: "json, name=awsService" })
  awsService?: AwsService;

  @Metadata({ data: "json, name=federatedUser" })
  federatedUser?: FederatedUser;

  @Metadata({ data: "json, name=iamUser" })
  iamUser?: IamUser;

  @Metadata({ data: "json, name=root" })
  root?: UserIdentityRoot;

  @Metadata({ data: "json, name=type" })
  type?: UserIdentityTypeEnum;
}
