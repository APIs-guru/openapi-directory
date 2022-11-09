import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceInfo
/** 
 * Information about a service.
**/
export class ServiceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
