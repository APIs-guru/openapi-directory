import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
**/
export declare class VpcAccessibleServices extends SpeakeasyBase {
    allowedServices?: string[];
    enableRestriction?: boolean;
}
