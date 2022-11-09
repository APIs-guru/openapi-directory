import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes an individual setting that controls some aspect of MemoryDB behavior.
**/
export declare class Parameter extends SpeakeasyBase {
    allowedValues?: string;
    dataType?: string;
    description?: string;
    minimumEngineVersion?: string;
    name?: string;
    value?: string;
}
