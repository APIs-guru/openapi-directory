import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SessionContextAttributes
/** 
 * Provides information about the context in which temporary security credentials were issued to an entity.
**/
export class SessionContextAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=mfaAuthenticated" })
  mfaAuthenticated?: boolean;
}
