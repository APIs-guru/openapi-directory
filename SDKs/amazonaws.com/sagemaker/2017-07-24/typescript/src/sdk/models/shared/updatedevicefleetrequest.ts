import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";



export class UpdateDeviceFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=EnableIotRoleAlias" })
  enableIotRoleAlias?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: EdgeOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
