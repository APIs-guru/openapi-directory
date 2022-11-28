import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopConfig } from "./humanloopconfig";
import { Image } from "./image";
export declare class DetectModerationLabelsRequest extends SpeakeasyBase {
    humanLoopConfig?: HumanLoopConfig;
    image: Image;
    minConfidence?: number;
}
