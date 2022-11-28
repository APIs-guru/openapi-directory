import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountJoinedMethodEnum } from "./accountjoinedmethodenum";
import { AccountStatusEnum } from "./accountstatusenum";



// DelegatedAdministrator
/** 
 * Contains information about the delegated administrator.
**/
export class DelegatedAdministrator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=DelegationEnabledDate" })
  delegationEnabledDate?: Date;

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
