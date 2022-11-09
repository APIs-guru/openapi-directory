import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorCapabilityEnum } from "./connectorcapabilityenum";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { VmManagerTypeEnum } from "./vmmanagertypeenum";


// Connector
/** 
 * Represents a connector.
**/
export class Connector extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedOn" })
  associatedOn?: Date;

  @Metadata({ data: "json, name=capabilityList" })
  capabilityList?: ConnectorCapabilityEnum[];

  @Metadata({ data: "json, name=connectorId" })
  connectorId?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @Metadata({ data: "json, name=status" })
  status?: ConnectorStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=vmManagerId" })
  vmManagerId?: string;

  @Metadata({ data: "json, name=vmManagerName" })
  vmManagerName?: string;

  @Metadata({ data: "json, name=vmManagerType" })
  vmManagerType?: VmManagerTypeEnum;
}
