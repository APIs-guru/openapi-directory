import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModeEnum } from "./modeenum";
import { RuntimeEnum } from "./runtimeenum";
/**
 * A complex type that describes function metadata.
**/
export declare class FunctionConfiguration extends SpeakeasyBase {
    codeSize?: number;
    configurationId?: string;
    description?: string;
    functionArn?: string;
    functionName?: string;
    handler?: string;
    lastModified?: Date;
    memorySize?: number;
    mode?: ModeEnum;
    role?: string;
    runtime?: RuntimeEnum;
    timeout?: number;
}
