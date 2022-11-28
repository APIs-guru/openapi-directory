import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { Tag } from "./tag";
export declare class CreateDeviceFleetRequest extends SpeakeasyBase {
    description?: string;
    deviceFleetName: string;
    enableIotRoleAlias?: boolean;
    outputConfig: EdgeOutputConfig;
    roleArn?: string;
    tags?: Tag[];
}
