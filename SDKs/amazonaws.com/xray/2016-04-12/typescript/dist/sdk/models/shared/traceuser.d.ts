import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceId } from "./serviceid";
/**
 * Information about a user recorded in segment documents.
**/
export declare class TraceUser extends SpeakeasyBase {
    serviceIds?: ServiceId[];
    userName?: string;
}
