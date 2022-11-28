import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnSpec } from "./columnspec";



// ListColumnSpecsResponse
/** 
 * Response message for AutoMl.ListColumnSpecs.
**/
export class ListColumnSpecsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSpecs", elemType: ColumnSpec })
  columnSpecs?: ColumnSpec[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
