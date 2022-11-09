import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineAttribute } from "./engineattribute";
export declare class AssociateNodeRequest extends SpeakeasyBase {
    engineAttributes: EngineAttribute[];
    nodeName: string;
    serverName: string;
}
