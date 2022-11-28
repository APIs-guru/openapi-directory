import { SpeakeasyBase } from "../../../internal/utils";
import { PortalStatus } from "./portalstatus";
/**
 * Contains a portal summary.
**/
export declare class PortalSummary extends SpeakeasyBase {
    creationDate?: Date;
    description?: string;
    id: string;
    lastUpdateDate?: Date;
    name: string;
    roleArn?: string;
    startUrl: string;
    status: PortalStatus;
}
