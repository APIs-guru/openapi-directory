import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeySimple
/** 
 * Key Simple
**/
export class KeySimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;
}
