import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataTransfer } from "./datatransfer";


// DataTransfersListResponse
/** 
 * Template for a collection of DataTransfer resources.
**/
export class DataTransfersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataTransfers", elemType: shared.DataTransfer })
  dataTransfers?: DataTransfer[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
