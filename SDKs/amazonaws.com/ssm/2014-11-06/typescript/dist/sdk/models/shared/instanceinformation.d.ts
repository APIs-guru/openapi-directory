import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAggregatedAssociationOverview } from "./instanceaggregatedassociationoverview";
import { PingStatusEnum } from "./pingstatusenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes a filter for a specific list of instances.
**/
export declare class InstanceInformation extends SpeakeasyBase {
    activationId?: string;
    agentVersion?: string;
    associationOverview?: InstanceAggregatedAssociationOverview;
    associationStatus?: string;
    computerName?: string;
    ipAddress?: string;
    iamRole?: string;
    instanceId?: string;
    isLatestVersion?: boolean;
    lastAssociationExecutionDate?: Date;
    lastPingDateTime?: Date;
    lastSuccessfulAssociationExecutionDate?: Date;
    name?: string;
    pingStatus?: PingStatusEnum;
    platformName?: string;
    platformType?: PlatformTypeEnum;
    platformVersion?: string;
    registrationDate?: Date;
    resourceType?: ResourceTypeEnum;
}
