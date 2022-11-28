import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupInfo
/** 
 * Group information
**/
export class GroupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
