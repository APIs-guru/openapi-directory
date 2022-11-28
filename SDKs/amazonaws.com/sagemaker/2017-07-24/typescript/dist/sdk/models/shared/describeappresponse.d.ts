import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { AppStatusEnum } from "./appstatusenum";
export declare class DescribeAppResponse extends SpeakeasyBase {
    appArn?: string;
    appName?: string;
    appType?: AppTypeEnum;
    creationTime?: Date;
    domainId?: string;
    failureReason?: string;
    lastHealthCheckTimestamp?: Date;
    lastUserActivityTimestamp?: Date;
    resourceSpec?: ResourceSpec;
    status?: AppStatusEnum;
    userProfileName?: string;
}
