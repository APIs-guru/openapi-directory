import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineAttribute } from "./engineattribute";
export declare class ExportServerEngineAttributeRequest extends SpeakeasyBase {
    exportAttributeName: string;
    inputAttributes?: EngineAttribute[];
    serverName: string;
}
