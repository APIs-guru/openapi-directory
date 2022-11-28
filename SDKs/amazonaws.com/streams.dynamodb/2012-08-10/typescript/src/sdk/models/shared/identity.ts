import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Identity
/** 
 * Contains details about the type of identity that made the request.
**/
export class Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
