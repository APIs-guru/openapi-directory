import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dataset } from "./dataset";


// ListDatasetsResponse
/** 
 * Response message for AutoMl.ListDatasets.
**/
export class ListDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets", elemType: shared.Dataset })
  datasets?: Dataset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
