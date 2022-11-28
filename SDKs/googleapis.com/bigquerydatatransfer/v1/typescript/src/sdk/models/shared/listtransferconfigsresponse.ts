import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferConfig } from "./transferconfig";



// ListTransferConfigsResponse
/** 
 * The returned list of pipelines in the project.
**/
export class ListTransferConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transferConfigs", elemType: TransferConfig })
  transferConfigs?: TransferConfig[];
}
