import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Token
/** 
 * Token
**/
export class Token extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=expire" })
  expire: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
