import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineAttribute } from "./engineattribute";
export declare class DisassociateNodeRequest extends SpeakeasyBase {
    engineAttributes?: EngineAttribute[];
    nodeName: string;
    serverName: string;
}
