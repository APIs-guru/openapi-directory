import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpsItemIdentity
/** 
 * Information about the user or resource that created an OpsItem event.
**/
export class OpsItemIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
