import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vulnerability } from "./vulnerability";
import { FirmwareInfo } from "./firmwareinfo";



export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cve_list", elemType: Vulnerability })
  cveList?: Vulnerability[];

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=firmware_info" })
  firmwareInfo?: FirmwareInfo;

  @SpeakeasyMetadata({ data: "json, name=firmware_version" })
  firmwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=is_discontinued" })
  isDiscontinued?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latest_firmware_info" })
  latestFirmwareInfo?: FirmwareInfo;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model_name" })
  modelName?: string;
}
