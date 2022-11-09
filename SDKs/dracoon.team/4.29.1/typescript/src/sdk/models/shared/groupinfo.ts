import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupInfo
/** 
 * Group information
**/
export class GroupInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
