import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EgressPolicy } from "./egresspolicy";
import { IngressPolicy } from "./ingresspolicy";
import { VpcAccessibleServices } from "./vpcaccessibleservices";



// ServicePerimeterConfig
/** 
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export class ServicePerimeterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @SpeakeasyMetadata({ data: "json, name=egressPolicies", elemType: EgressPolicy })
  egressPolicies?: EgressPolicy[];

  @SpeakeasyMetadata({ data: "json, name=ingressPolicies", elemType: IngressPolicy })
  ingressPolicies?: IngressPolicy[];

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=restrictedServices" })
  restrictedServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcAccessibleServices" })
  vpcAccessibleServices?: VpcAccessibleServices;
}
