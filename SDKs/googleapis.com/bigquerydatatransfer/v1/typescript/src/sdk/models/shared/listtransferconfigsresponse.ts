import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransferConfig } from "./transferconfig";


// ListTransferConfigsResponse
/** 
 * The returned list of pipelines in the project.
**/
export class ListTransferConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transferConfigs", elemType: shared.TransferConfig })
  transferConfigs?: TransferConfig[];
}
