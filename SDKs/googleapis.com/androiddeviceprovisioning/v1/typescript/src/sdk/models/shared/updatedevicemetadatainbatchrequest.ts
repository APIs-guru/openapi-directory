import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateMetadataArguments } from "./updatemetadataarguments";


// UpdateDeviceMetadataInBatchRequest
/** 
 * Request to update device metadata in batch.
**/
export class UpdateDeviceMetadataInBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=updates", elemType: shared.UpdateMetadataArguments })
  updates?: UpdateMetadataArguments[];
}
