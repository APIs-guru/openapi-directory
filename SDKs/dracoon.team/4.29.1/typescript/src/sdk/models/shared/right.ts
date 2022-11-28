import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Right
/** 
 * Right information
**/
export class Right extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
