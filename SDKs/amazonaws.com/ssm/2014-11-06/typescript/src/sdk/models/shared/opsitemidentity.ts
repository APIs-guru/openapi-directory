import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpsItemIdentity
/** 
 * Information about the user or resource that created an OpsItem event.
**/
export class OpsItemIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
