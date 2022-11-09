import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAggregatedAssociationOverview } from "./instanceaggregatedassociationoverview";
import { PingStatusEnum } from "./pingstatusenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


// InstanceInformation
/** 
 * Describes a filter for a specific list of instances. 
**/
export class InstanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationId" })
  activationId?: string;

  @Metadata({ data: "json, name=AgentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=AssociationOverview" })
  associationOverview?: InstanceAggregatedAssociationOverview;

  @Metadata({ data: "json, name=AssociationStatus" })
  associationStatus?: string;

  @Metadata({ data: "json, name=ComputerName" })
  computerName?: string;

  @Metadata({ data: "json, name=IPAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=IamRole" })
  iamRole?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=IsLatestVersion" })
  isLatestVersion?: boolean;

  @Metadata({ data: "json, name=LastAssociationExecutionDate" })
  lastAssociationExecutionDate?: Date;

  @Metadata({ data: "json, name=LastPingDateTime" })
  lastPingDateTime?: Date;

  @Metadata({ data: "json, name=LastSuccessfulAssociationExecutionDate" })
  lastSuccessfulAssociationExecutionDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PingStatus" })
  pingStatus?: PingStatusEnum;

  @Metadata({ data: "json, name=PlatformName" })
  platformName?: string;

  @Metadata({ data: "json, name=PlatformType" })
  platformType?: PlatformTypeEnum;

  @Metadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=RegistrationDate" })
  registrationDate?: Date;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
