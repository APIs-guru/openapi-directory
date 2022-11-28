import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorCapabilityEnum } from "./connectorcapabilityenum";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { VmManagerTypeEnum } from "./vmmanagertypeenum";
/**
 * Represents a connector.
**/
export declare class Connector extends SpeakeasyBase {
    associatedOn?: Date;
    capabilityList?: ConnectorCapabilityEnum[];
    connectorId?: string;
    ipAddress?: string;
    macAddress?: string;
    status?: ConnectorStatusEnum;
    version?: string;
    vmManagerId?: string;
    vmManagerName?: string;
    vmManagerType?: VmManagerTypeEnum;
}
