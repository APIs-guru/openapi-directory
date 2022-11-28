import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Variant
/** 
 * Contains an asset property value (of a single type only).
**/
export class Variant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=integerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
