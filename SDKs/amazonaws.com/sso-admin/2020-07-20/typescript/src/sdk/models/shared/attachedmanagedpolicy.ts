import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachedManagedPolicy
/** 
 * A structure that stores the details of the IAM managed policy.
**/
export class AttachedManagedPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
