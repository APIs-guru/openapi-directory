import { SpeakeasyBase } from "../../../internal/utils";
import { Alarms } from "./alarms";
import { AuthModeEnum } from "./authmodeenum";
import { ImageLocation } from "./imagelocation";
import { PortalStatus } from "./portalstatus";
export declare class DescribePortalResponse extends SpeakeasyBase {
    alarms?: Alarms;
    notificationSenderEmail?: string;
    portalArn: string;
    portalAuthMode?: AuthModeEnum;
    portalClientId: string;
    portalContactEmail: string;
    portalCreationDate: Date;
    portalDescription?: string;
    portalId: string;
    portalLastUpdateDate: Date;
    portalLogoImageLocation?: ImageLocation;
    portalName: string;
    portalStartUrl: string;
    portalStatus: PortalStatus;
    roleArn?: string;
}
