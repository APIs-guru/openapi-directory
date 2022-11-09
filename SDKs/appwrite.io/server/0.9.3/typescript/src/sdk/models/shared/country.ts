import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Country
/** 
 * Country
**/
export class Country extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
