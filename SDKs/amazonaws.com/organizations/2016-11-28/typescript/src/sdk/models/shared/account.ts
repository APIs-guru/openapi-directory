import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountJoinedMethodEnum } from "./accountjoinedmethodenum";
import { AccountStatusEnum } from "./accountstatusenum";


// Account
/** 
 * Contains information about an AWS account that is a member of an organization.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=JoinedMethod" })
  joinedMethod?: AccountJoinedMethodEnum;

  @Metadata({ data: "json, name=JoinedTimestamp" })
  joinedTimestamp?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AccountStatusEnum;
}
