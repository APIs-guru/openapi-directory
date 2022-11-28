import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
export declare class UpdateDeviceFleetRequest extends SpeakeasyBase {
    description?: string;
    deviceFleetName: string;
    enableIotRoleAlias?: boolean;
    outputConfig: EdgeOutputConfig;
    roleArn?: string;
}
