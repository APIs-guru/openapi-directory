import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableSpec } from "./tablespec";



// ListTableSpecsResponse
/** 
 * Response message for AutoMl.ListTableSpecs.
**/
export class ListTableSpecsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tableSpecs", elemType: TableSpec })
  tableSpecs?: TableSpec[];
}
