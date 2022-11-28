import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Label
/** 
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: string;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
