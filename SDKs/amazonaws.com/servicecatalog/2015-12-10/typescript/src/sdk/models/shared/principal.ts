import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";



// Principal
/** 
 * Information about a principal.
**/
export class Principal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrincipalARN" })
  principalArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalType" })
  principalType?: PrincipalTypeEnum;
}
