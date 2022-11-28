import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SecurityContextSecuritiesEnum {
    Insecure = "INSECURE",
    Ssl = "SSL"
}


// SecurityContext
/** 
 * Output only. A security context.
**/
export class SecurityContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securities" })
  securities?: SecurityContextSecuritiesEnum[];
}
