import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionModeEnum } from "./executionmodeenum";
import { Tag } from "./tag";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
export declare class StartAutomationExecutionRequest extends SpeakeasyBase {
    clientToken?: string;
    documentName: string;
    documentVersion?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    mode?: ExecutionModeEnum;
    parameters?: Map<string, string[]>;
    tags?: Tag[];
    targetLocations?: TargetLocation[];
    targetMaps?: Map<string, string[]>[];
    targetParameterName?: string;
    targets?: Target[];
}
