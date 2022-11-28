import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=assumedRole" })
  assumedRole?: AssumedRole;

  @SpeakeasyMetadata({ data: "json, name=awsAccount" })
  awsAccount?: AwsAccount;

  @SpeakeasyMetadata({ data: "json, name=awsService" })
  awsService?: AwsService;

  @SpeakeasyMetadata({ data: "json, name=federatedUser" })
  federatedUser?: FederatedUser;

  @SpeakeasyMetadata({ data: "json, name=iamUser" })
  iamUser?: IamUser;

  @SpeakeasyMetadata({ data: "json, name=root" })
  root?: UserIdentityRoot;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserIdentityTypeEnum;
}
