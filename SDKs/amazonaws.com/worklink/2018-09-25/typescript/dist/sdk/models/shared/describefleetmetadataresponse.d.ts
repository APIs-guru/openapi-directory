import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetStatusEnum } from "./fleetstatusenum";
export declare class DescribeFleetMetadataResponse extends SpeakeasyBase {
    companyCode?: string;
    createdTime?: Date;
    displayName?: string;
    fleetName?: string;
    fleetStatus?: FleetStatusEnum;
    lastUpdatedTime?: Date;
    optimizeForEndUserLocation?: boolean;
    tags?: Map<string, string>;
}
