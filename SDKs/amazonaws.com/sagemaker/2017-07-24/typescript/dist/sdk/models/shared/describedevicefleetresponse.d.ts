import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
export declare class DescribeDeviceFleetResponse extends SpeakeasyBase {
    creationTime: Date;
    description?: string;
    deviceFleetArn: string;
    deviceFleetName: string;
    iotRoleAlias?: string;
    lastModifiedTime: Date;
    outputConfig: EdgeOutputConfig;
    roleArn?: string;
}
