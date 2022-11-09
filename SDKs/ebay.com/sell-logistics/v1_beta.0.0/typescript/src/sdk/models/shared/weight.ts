import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Weight
/** 
 * This complex type contains information about the weight of an object such as a shipping package.
**/
export class Weight extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
