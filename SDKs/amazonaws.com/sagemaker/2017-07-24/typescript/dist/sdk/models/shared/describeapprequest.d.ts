import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
export declare class DescribeAppRequest extends SpeakeasyBase {
    appName: string;
    appType: AppTypeEnum;
    domainId: string;
    userProfileName: string;
}
