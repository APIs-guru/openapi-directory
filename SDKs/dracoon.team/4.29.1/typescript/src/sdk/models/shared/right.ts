import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Right
/** 
 * Right information
**/
export class Right extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
