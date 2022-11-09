import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SecurityContextSecuritiesEnum {
    Insecure = "INSECURE"
,    Ssl = "SSL"
}


// SecurityContext
/** 
 * Output only. A security context.
**/
export class SecurityContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=securities" })
  securities?: SecurityContextSecuritiesEnum[];
}
