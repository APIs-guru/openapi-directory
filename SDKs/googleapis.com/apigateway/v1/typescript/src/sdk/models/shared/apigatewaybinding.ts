import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApigatewayExpr } from "./apigatewayexpr";


// ApigatewayBinding
/** 
 * Associates `members`, or principals, with a `role`.
**/
export class ApigatewayBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: ApigatewayExpr;

  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=role" })
  role?: string;
}
