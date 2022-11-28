import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SecurityContextSecuritiesEnum {
    Insecure = "INSECURE",
    Ssl = "SSL"
}
/**
 * Output only. A security context.
**/
export declare class SecurityContext extends SpeakeasyBase {
    securities?: SecurityContextSecuritiesEnum[];
}
