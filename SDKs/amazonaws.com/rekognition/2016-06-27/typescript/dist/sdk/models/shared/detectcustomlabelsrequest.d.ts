import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
export declare class DetectCustomLabelsRequest extends SpeakeasyBase {
    image: Image;
    maxResults?: number;
    minConfidence?: number;
    projectVersionArn: string;
}
