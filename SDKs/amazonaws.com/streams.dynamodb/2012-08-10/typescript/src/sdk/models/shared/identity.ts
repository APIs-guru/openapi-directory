import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Identity
/** 
 * Contains details about the type of identity that made the request.
**/
export class Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
