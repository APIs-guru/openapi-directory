import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteStreamInput
/** 
 * Represents the input for <a>DeleteStream</a>.
**/
export class DeleteStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnforceConsumerDeletion" })
  enforceConsumerDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
