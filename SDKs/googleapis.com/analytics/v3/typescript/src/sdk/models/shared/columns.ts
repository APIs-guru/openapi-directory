import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Column } from "./column";


// Columns
/** 
 * Lists columns (dimensions and metrics) for a particular report type.
**/
export class Columns extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeNames" })
  attributeNames?: string[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Column })
  items?: Column[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
