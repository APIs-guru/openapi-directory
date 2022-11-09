import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConstraintSummary } from "./constraintsummary";
import { Tag } from "./tag";


// LaunchPathSummary
/** 
 * Summary information about a product path for a user.
**/
export class LaunchPathSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConstraintSummaries", elemType: shared.ConstraintSummary })
  constraintSummaries?: ConstraintSummary[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
