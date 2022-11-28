import { SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningConfig } from "./codesigningconfig";
export declare class ListCodeSigningConfigsResponse extends SpeakeasyBase {
    codeSigningConfigs?: CodeSigningConfig[];
    nextMarker?: string;
}
