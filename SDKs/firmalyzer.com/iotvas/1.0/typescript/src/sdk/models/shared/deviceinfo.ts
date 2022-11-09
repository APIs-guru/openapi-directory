import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Vulnerability } from "./vulnerability";
import { FirmwareInfo } from "./firmwareinfo";
import { FirmwareInfo } from "./firmwareinfo";


export class DeviceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cve_list", elemType: shared.Vulnerability })
  cveList?: Vulnerability[];

  @Metadata({ data: "json, name=device_type" })
  deviceType?: string;

  @Metadata({ data: "json, name=firmware_info" })
  firmwareInfo?: FirmwareInfo;

  @Metadata({ data: "json, name=firmware_version" })
  firmwareVersion?: string;

  @Metadata({ data: "json, name=is_discontinued" })
  isDiscontinued?: boolean;

  @Metadata({ data: "json, name=latest_firmware_info" })
  latestFirmwareInfo?: FirmwareInfo;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model_name" })
  modelName?: string;
}
