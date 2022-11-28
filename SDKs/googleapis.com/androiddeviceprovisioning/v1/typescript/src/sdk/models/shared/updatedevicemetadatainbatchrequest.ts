import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateMetadataArguments } from "./updatemetadataarguments";



// UpdateDeviceMetadataInBatchRequest
/** 
 * Request to update device metadata in batch.
**/
export class UpdateDeviceMetadataInBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updates", elemType: UpdateMetadataArguments })
  updates?: UpdateMetadataArguments[];
}
