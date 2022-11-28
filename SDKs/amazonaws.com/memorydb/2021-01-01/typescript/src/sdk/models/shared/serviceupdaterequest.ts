import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceUpdateRequest
/** 
 * A request to apply a service update
**/
export class ServiceUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceUpdateNameToApply" })
  serviceUpdateNameToApply?: string;
}
