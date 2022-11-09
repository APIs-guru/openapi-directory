import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccount
/** 
 * ServiceAccount represents a GCP service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
