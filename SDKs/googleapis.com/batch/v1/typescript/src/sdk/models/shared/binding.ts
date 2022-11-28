import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";



// Binding
/** 
 * Associates `members`, or principals, with a `role`.
**/
export class Binding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: Expr;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
