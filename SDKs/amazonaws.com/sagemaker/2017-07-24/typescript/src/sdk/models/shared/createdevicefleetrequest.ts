import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { Tag } from "./tag";


export class CreateDeviceFleetRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
