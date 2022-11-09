import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourcePolicy
/** 
 * The resource policy that allows Incident Manager to perform actions on resources on your behalf.
**/
export class ResourcePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyDocument" })
  policyDocument: string;

  @Metadata({ data: "json, name=policyId" })
  policyId: string;

  @Metadata({ data: "json, name=ramResourceShareRegion" })
  ramResourceShareRegion: string;
}
