import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArrayValue
/** 
 * Contains an array.
**/
export class ArrayValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayValues", elemType: ArrayValue })
  arrayValues?: ArrayValue[];

  @SpeakeasyMetadata({ data: "json, name=booleanValues" })
  booleanValues?: boolean[];

  @SpeakeasyMetadata({ data: "json, name=doubleValues" })
  doubleValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=longValues" })
  longValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
