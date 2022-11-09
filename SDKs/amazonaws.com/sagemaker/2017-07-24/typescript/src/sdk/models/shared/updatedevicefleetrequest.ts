import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";


export class UpdateDeviceFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=EnableIotRoleAlias" })
  enableIotRoleAlias?: boolean;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: EdgeOutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
