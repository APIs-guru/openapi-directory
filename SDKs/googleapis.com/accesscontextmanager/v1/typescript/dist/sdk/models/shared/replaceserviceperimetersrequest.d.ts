import { SpeakeasyBase } from "../../../internal/utils";
import { ServicePerimeter } from "./serviceperimeter";
/**
 * A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
**/
export declare class ReplaceServicePerimetersRequest extends SpeakeasyBase {
    etag?: string;
    servicePerimeters?: ServicePerimeter[];
}
