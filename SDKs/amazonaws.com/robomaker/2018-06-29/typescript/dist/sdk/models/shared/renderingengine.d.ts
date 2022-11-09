import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RenderingEngineTypeEnum } from "./renderingenginetypeenum";
/**
 * Information about a rendering engine.
**/
export declare class RenderingEngine extends SpeakeasyBase {
    name?: RenderingEngineTypeEnum;
    version?: string;
}
