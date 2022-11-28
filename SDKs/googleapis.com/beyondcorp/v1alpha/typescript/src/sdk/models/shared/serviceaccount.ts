import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccount
/** 
 * ServiceAccount represents a GCP service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
