import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceStatusEnum } from "./devicestatusenum";


export class DescribeDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstAccessedTime" })
  firstAccessedTime?: Date;

  @Metadata({ data: "json, name=LastAccessedTime" })
  lastAccessedTime?: Date;

  @Metadata({ data: "json, name=Manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=Model" })
  model?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: string;

  @Metadata({ data: "json, name=OperatingSystemVersion" })
  operatingSystemVersion?: string;

  @Metadata({ data: "json, name=PatchLevel" })
  patchLevel?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DeviceStatusEnum;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
