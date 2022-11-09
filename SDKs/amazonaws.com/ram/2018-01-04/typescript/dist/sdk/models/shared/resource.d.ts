import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
/**
 * Describes a resource associated with a resource share.
**/
export declare class Resource extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    lastUpdatedTime?: Date;
    resourceGroupArn?: string;
    resourceShareArn?: string;
    status?: ResourceStatusEnum;
    statusMessage?: string;
    type?: string;
}
