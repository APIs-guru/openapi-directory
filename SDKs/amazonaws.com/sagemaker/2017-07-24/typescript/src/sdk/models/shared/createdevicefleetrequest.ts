import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { Tag } from "./tag";



export class CreateDeviceFleetRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
