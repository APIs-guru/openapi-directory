import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceInfo
/** 
 * Information about a service.
**/
export class ServiceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
