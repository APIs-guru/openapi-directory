import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Label
/** 
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color: string;

  @Metadata({ data: "json, name=default" })
  default: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
