import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeySimple
/** 
 * Key Simple
**/
export class KeySimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=key" })
  key: string;
}
