import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Capacity } from "./capacity";
import { UnlockStateEnum } from "./unlockstateenum";
import { PhysicalNetworkInterface } from "./physicalnetworkinterface";
import { SoftwareInformation } from "./softwareinformation";


export class DescribeDeviceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedWithJob" })
  associatedWithJob?: string;

  @Metadata({ data: "json, name=deviceCapacities", elemType: shared.Capacity })
  deviceCapacities?: Capacity[];

  @Metadata({ data: "json, name=deviceState" })
  deviceState?: UnlockStateEnum;

  @Metadata({ data: "json, name=deviceType" })
  deviceType?: string;

  @Metadata({ data: "json, name=lastReachedOutAt" })
  lastReachedOutAt?: Date;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=managedDeviceArn" })
  managedDeviceArn?: string;

  @Metadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @Metadata({ data: "json, name=physicalNetworkInterfaces", elemType: shared.PhysicalNetworkInterface })
  physicalNetworkInterfaces?: PhysicalNetworkInterface[];

  @Metadata({ data: "json, name=software" })
  software?: SoftwareInformation;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
