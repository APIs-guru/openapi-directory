import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { AppStatusEnum } from "./appstatusenum";
/**
 * Details about an Amazon SageMaker app.
**/
export declare class AppDetails extends SpeakeasyBase {
    appName?: string;
    appType?: AppTypeEnum;
    creationTime?: Date;
    domainId?: string;
    status?: AppStatusEnum;
    userProfileName?: string;
}
