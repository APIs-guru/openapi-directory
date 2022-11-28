import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayExpr } from "./apigatewayexpr";



// ApigatewayBinding
/** 
 * Associates `members` with a `role`.
**/
export class ApigatewayBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: ApigatewayExpr;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
