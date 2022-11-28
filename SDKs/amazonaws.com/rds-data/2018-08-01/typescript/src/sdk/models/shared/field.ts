import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";



// Field
/** 
 * Contains a value.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayValue" })
  arrayValue?: ArrayValue;

  @SpeakeasyMetadata({ data: "json, name=blobValue" })
  blobValue?: string;

  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=isNull" })
  isNull?: boolean;

  @SpeakeasyMetadata({ data: "json, name=longValue" })
  longValue?: number;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
