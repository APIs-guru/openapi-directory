import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SessionIssuer
/** 
 * Provides information about the source and type of temporary security credentials that were issued to an entity.
**/
export class SessionIssuer extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
