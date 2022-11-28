import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Capacity } from "./capacity";
import { UnlockStateEnum } from "./unlockstateenum";
import { PhysicalNetworkInterface } from "./physicalnetworkinterface";
import { SoftwareInformation } from "./softwareinformation";



export class DescribeDeviceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedWithJob" })
  associatedWithJob?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceCapacities", elemType: Capacity })
  deviceCapacities?: Capacity[];

  @SpeakeasyMetadata({ data: "json, name=deviceState" })
  deviceState?: UnlockStateEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=lastReachedOutAt" })
  lastReachedOutAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=managedDeviceArn" })
  managedDeviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=physicalNetworkInterfaces", elemType: PhysicalNetworkInterface })
  physicalNetworkInterfaces?: PhysicalNetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=software" })
  software?: SoftwareInformation;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
