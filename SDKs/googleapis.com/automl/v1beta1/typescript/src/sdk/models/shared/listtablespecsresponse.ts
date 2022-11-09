import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableSpec } from "./tablespec";


// ListTableSpecsResponse
/** 
 * Response message for AutoMl.ListTableSpecs.
**/
export class ListTableSpecsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tableSpecs", elemType: shared.TableSpec })
  tableSpecs?: TableSpec[];
}
