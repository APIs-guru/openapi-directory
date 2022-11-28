import { SpeakeasyBase } from "../../../internal/utils";
import { DetectTextFilters } from "./detecttextfilters";
import { Image } from "./image";
export declare class DetectTextRequest extends SpeakeasyBase {
    filters?: DetectTextFilters;
    image: Image;
}
