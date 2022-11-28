import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcAccessibleServices } from "./vpcaccessibleservices";



// ServicePerimeterConfig
/** 
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export class ServicePerimeterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=restrictedServices" })
  restrictedServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=unrestrictedServices" })
  unrestrictedServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcAccessibleServices" })
  vpcAccessibleServices?: VpcAccessibleServices;
}
