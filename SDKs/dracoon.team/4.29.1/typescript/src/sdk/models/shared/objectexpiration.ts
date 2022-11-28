import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectExpiration
/** 
 * Expiration information
**/
export class ObjectExpiration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableExpiration" })
  enableExpiration: boolean;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;
}
