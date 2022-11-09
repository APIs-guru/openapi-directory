import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Token
/** 
 * Token
**/
export class Token extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=expire" })
  expire: number;

  @Metadata({ data: "json, name=secret" })
  secret: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}
