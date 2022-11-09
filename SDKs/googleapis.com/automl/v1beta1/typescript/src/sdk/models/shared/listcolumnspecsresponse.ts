import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnSpec } from "./columnspec";


// ListColumnSpecsResponse
/** 
 * Response message for AutoMl.ListColumnSpecs.
**/
export class ListColumnSpecsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnSpecs", elemType: shared.ColumnSpec })
  columnSpecs?: ColumnSpec[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
