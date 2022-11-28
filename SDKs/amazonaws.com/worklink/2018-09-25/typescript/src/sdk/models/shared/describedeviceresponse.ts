import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceStatusEnum } from "./devicestatusenum";



export class DescribeDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstAccessedTime" })
  firstAccessedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastAccessedTime" })
  lastAccessedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=Model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystemVersion" })
  operatingSystemVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PatchLevel" })
  patchLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DeviceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
