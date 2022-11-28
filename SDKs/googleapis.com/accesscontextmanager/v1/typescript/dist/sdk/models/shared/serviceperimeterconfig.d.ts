import { SpeakeasyBase } from "../../../internal/utils";
import { EgressPolicy } from "./egresspolicy";
import { IngressPolicy } from "./ingresspolicy";
import { VpcAccessibleServices } from "./vpcaccessibleservices";
/**
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export declare class ServicePerimeterConfig extends SpeakeasyBase {
    accessLevels?: string[];
    egressPolicies?: EgressPolicy[];
    ingressPolicies?: IngressPolicy[];
    resources?: string[];
    restrictedServices?: string[];
    vpcAccessibleServices?: VpcAccessibleServices;
}
