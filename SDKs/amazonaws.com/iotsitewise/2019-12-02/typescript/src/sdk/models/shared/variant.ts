import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Variant
/** 
 * Contains an asset property value (of a single type only).
**/
export class Variant extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=integerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
