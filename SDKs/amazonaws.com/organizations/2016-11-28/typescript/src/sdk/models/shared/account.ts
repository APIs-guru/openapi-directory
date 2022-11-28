import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountJoinedMethodEnum } from "./accountjoinedmethodenum";
import { AccountStatusEnum } from "./accountstatusenum";



// Account
/** 
 * Contains information about an AWS account that is a member of an organization.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=JoinedMethod" })
  joinedMethod?: AccountJoinedMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=JoinedTimestamp" })
  joinedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AccountStatusEnum;
}
