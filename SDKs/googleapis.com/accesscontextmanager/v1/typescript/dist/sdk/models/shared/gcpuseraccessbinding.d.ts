import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.
**/
export declare class GcpUserAccessBinding extends SpeakeasyBase {
    accessLevels?: string[];
    groupKey?: string;
    name?: string;
}
