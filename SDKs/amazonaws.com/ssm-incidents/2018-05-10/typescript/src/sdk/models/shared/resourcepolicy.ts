import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourcePolicy
/** 
 * The resource policy that allows Incident Manager to perform actions on resources on your behalf.
**/
export class ResourcePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument: string;

  @SpeakeasyMetadata({ data: "json, name=policyId" })
  policyId: string;

  @SpeakeasyMetadata({ data: "json, name=ramResourceShareRegion" })
  ramResourceShareRegion: string;
}
