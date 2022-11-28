import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstraintSummary } from "./constraintsummary";
import { Tag } from "./tag";



// LaunchPathSummary
/** 
 * Summary information about a product path for a user.
**/
export class LaunchPathSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConstraintSummaries", elemType: ConstraintSummary })
  constraintSummaries?: ConstraintSummary[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
