import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayExpr } from "./apigatewayexpr";
/**
 * Associates `members` with a `role`.
**/
export declare class ApigatewayBinding extends SpeakeasyBase {
    condition?: ApigatewayExpr;
    members?: string[];
    role?: string;
}
