import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PortalStatus } from "./portalstatus";
export declare class CreatePortalResponse extends SpeakeasyBase {
    portalArn: string;
    portalId: string;
    portalStartUrl: string;
    portalStatus: PortalStatus;
    ssoApplicationId: string;
}
