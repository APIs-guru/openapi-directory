import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArrayValue } from "./arrayvalue";


// ArrayValue
/** 
 * Contains an array.
**/
export class ArrayValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayValues", elemType: shared.ArrayValue })
  arrayValues?: ArrayValue[];

  @Metadata({ data: "json, name=booleanValues" })
  booleanValues?: boolean[];

  @Metadata({ data: "json, name=doubleValues" })
  doubleValues?: number[];

  @Metadata({ data: "json, name=longValues" })
  longValues?: number[];

  @Metadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
