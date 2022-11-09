import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectExpiration
/** 
 * Expiration information
**/
export class ObjectExpiration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableExpiration" })
  enableExpiration: boolean;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;
}
