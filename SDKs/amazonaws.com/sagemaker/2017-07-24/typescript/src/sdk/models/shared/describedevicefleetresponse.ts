import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";



export class DescribeDeviceFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetArn" })
  deviceFleetArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=IotRoleAlias" })
  iotRoleAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: EdgeOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
