import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAggregatedAssociationOverview } from "./instanceaggregatedassociationoverview";
import { PingStatusEnum } from "./pingstatusenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



// InstanceInformation
/** 
 * Describes a filter for a specific list of instances. 
**/
export class InstanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationId" })
  activationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationOverview" })
  associationOverview?: InstanceAggregatedAssociationOverview;

  @SpeakeasyMetadata({ data: "json, name=AssociationStatus" })
  associationStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ComputerName" })
  computerName?: string;

  @SpeakeasyMetadata({ data: "json, name=IPAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=IamRole" })
  iamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=IsLatestVersion" })
  isLatestVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastAssociationExecutionDate" })
  lastAssociationExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastPingDateTime" })
  lastPingDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfulAssociationExecutionDate" })
  lastSuccessfulAssociationExecutionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PingStatus" })
  pingStatus?: PingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PlatformName" })
  platformName?: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformType" })
  platformType?: PlatformTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrationDate" })
  registrationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
