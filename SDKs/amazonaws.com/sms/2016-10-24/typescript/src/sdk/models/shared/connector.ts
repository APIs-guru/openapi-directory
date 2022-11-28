import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorCapabilityEnum } from "./connectorcapabilityenum";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { VmManagerTypeEnum } from "./vmmanagertypeenum";



// Connector
/** 
 * Represents a connector.
**/
export class Connector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedOn" })
  associatedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=capabilityList" })
  capabilityList?: ConnectorCapabilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=connectorId" })
  connectorId?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConnectorStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=vmManagerId" })
  vmManagerId?: string;

  @SpeakeasyMetadata({ data: "json, name=vmManagerName" })
  vmManagerName?: string;

  @SpeakeasyMetadata({ data: "json, name=vmManagerType" })
  vmManagerType?: VmManagerTypeEnum;
}
