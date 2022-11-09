import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceUpdateRequest
/** 
 * A request to apply a service update
**/
export class ServiceUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceUpdateNameToApply" })
  serviceUpdateNameToApply?: string;
}
