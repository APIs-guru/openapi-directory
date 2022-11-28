import { SpeakeasyBase } from "../../../internal/utils";
import { VpcAccessibleServices } from "./vpcaccessibleservices";
/**
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export declare class ServicePerimeterConfig extends SpeakeasyBase {
    accessLevels?: string[];
    resources?: string[];
    restrictedServices?: string[];
    unrestrictedServices?: string[];
    vpcAccessibleServices?: VpcAccessibleServices;
}
