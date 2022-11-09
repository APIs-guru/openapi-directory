import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rate } from "./rate";
/**
 * This complex type defines the resource (API method) and the current rate-limit data for that resource.
**/
export declare class Resource extends SpeakeasyBase {
    name?: string;
    rates?: Rate[];
}
