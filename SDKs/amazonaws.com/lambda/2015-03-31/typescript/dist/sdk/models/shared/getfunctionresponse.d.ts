import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionCodeLocation } from "./functioncodelocation";
import { Concurrency } from "./concurrency";
import { FunctionConfiguration } from "./functionconfiguration";
export declare class GetFunctionResponse extends SpeakeasyBase {
    code?: FunctionCodeLocation;
    concurrency?: Concurrency;
    configuration?: FunctionConfiguration;
    tags?: Map<string, string>;
}
