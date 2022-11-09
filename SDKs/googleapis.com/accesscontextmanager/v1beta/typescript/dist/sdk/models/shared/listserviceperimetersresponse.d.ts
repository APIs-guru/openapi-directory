import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServicePerimeter } from "./serviceperimeter";
/**
 * A response to `ListServicePerimetersRequest`.
**/
export declare class ListServicePerimetersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    servicePerimeters?: ServicePerimeter[];
}
