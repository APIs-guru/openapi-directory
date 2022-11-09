import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArrayValue } from "./arrayvalue";


// Field
/** 
 * Contains a value.
**/
export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayValue" })
  arrayValue?: ArrayValue;

  @Metadata({ data: "json, name=blobValue" })
  blobValue?: string;

  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=isNull" })
  isNull?: boolean;

  @Metadata({ data: "json, name=longValue" })
  longValue?: number;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
