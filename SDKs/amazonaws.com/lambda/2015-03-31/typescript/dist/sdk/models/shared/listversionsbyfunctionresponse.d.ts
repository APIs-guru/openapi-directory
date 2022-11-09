import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionConfiguration } from "./functionconfiguration";
export declare class ListVersionsByFunctionResponse extends SpeakeasyBase {
    nextMarker?: string;
    versions?: FunctionConfiguration[];
}
