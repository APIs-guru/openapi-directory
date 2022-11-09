import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Capacity
/** 
 * The physical capacity of the Amazon Web Services Snow Family device. 
**/
export class Capacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=used" })
  used?: number;
}
