import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";



// Columns
/** 
 * Lists columns (dimensions and metrics) for a particular report type.
**/
export class Columns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeNames" })
  attributeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Column })
  items?: Column[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
