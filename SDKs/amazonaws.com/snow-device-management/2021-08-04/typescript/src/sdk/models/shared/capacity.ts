import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Capacity
/** 
 * The physical capacity of the Amazon Web Services Snow Family device. 
**/
export class Capacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used?: number;
}
