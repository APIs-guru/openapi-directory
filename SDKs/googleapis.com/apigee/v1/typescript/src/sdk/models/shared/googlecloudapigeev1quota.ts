import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1Quota
/** 
 * Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters.
**/
export class GoogleCloudApigeeV1Quota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=timeUnit" })
  timeUnit?: string;
}
