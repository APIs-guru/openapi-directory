import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";


export class DescribeDeviceFleetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceFleetArn" })
  deviceFleetArn: string;

  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=IotRoleAlias" })
  iotRoleAlias?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: EdgeOutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
