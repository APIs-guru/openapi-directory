import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Weight
/** 
 * This complex type contains information about the weight of an object such as a shipping package.
**/
export class Weight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
