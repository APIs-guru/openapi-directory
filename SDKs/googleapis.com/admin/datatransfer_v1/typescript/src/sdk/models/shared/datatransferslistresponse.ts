import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataTransfer } from "./datatransfer";



// DataTransfersListResponse
/** 
 * Template for a collection of DataTransfer resources.
**/
export class DataTransfersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataTransfers", elemType: DataTransfer })
  dataTransfers?: DataTransfer[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
