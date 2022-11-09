import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetStatusEnum } from "./fleetstatusenum";
/**
 * The summary of the fleet.
**/
export declare class FleetSummary extends SpeakeasyBase {
    companyCode?: string;
    createdTime?: Date;
    displayName?: string;
    fleetArn?: string;
    fleetName?: string;
    fleetStatus?: FleetStatusEnum;
    lastUpdatedTime?: Date;
    tags?: Map<string, string>;
}
