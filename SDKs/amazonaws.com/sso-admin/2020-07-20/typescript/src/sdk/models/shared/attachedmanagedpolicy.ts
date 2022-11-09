import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachedManagedPolicy
/** 
 * A structure that stores the details of the IAM managed policy.
**/
export class AttachedManagedPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
