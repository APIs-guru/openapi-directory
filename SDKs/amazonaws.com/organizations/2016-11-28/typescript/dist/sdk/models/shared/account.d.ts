import { SpeakeasyBase } from "../../../internal/utils";
import { AccountJoinedMethodEnum } from "./accountjoinedmethodenum";
import { AccountStatusEnum } from "./accountstatusenum";
/**
 * Contains information about an AWS account that is a member of an organization.
**/
export declare class Account extends SpeakeasyBase {
    arn?: string;
    email?: string;
    id?: string;
    joinedMethod?: AccountJoinedMethodEnum;
    joinedTimestamp?: Date;
    name?: string;
    status?: AccountStatusEnum;
}
