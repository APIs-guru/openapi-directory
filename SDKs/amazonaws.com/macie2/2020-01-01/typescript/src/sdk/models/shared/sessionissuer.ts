import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SessionIssuer
/** 
 * Provides information about the source and type of temporary security credentials that were issued to an entity.
**/
export class SessionIssuer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
