import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
export declare class DeleteAppRequest extends SpeakeasyBase {
    appName: string;
    appType: AppTypeEnum;
    domainId: string;
    userProfileName: string;
}
