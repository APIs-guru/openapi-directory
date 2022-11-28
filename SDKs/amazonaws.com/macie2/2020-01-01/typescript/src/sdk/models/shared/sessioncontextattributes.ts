import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SessionContextAttributes
/** 
 * Provides information about the context in which temporary security credentials were issued to an entity.
**/
export class SessionContextAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=mfaAuthenticated" })
  mfaAuthenticated?: boolean;
}
