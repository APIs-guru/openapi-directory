import { SpeakeasyBase } from "../../../internal/utils";
import { AccountJoinedMethodEnum } from "./accountjoinedmethodenum";
import { AccountStatusEnum } from "./accountstatusenum";
/**
 * Contains information about the delegated administrator.
**/
export declare class DelegatedAdministrator extends SpeakeasyBase {
    arn?: string;
    delegationEnabledDate?: Date;
    email?: string;
    id?: string;
    joinedMethod?: AccountJoinedMethodEnum;
    joinedTimestamp?: Date;
    name?: string;
    status?: AccountStatusEnum;
}
