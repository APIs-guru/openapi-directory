import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";


// Principal
/** 
 * Information about a principal.
**/
export class Principal extends SpeakeasyBase {
  @Metadata({ data: "json, name=PrincipalARN" })
  principalArn?: string;

  @Metadata({ data: "json, name=PrincipalType" })
  principalType?: PrincipalTypeEnum;
}
