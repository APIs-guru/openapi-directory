import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteStreamInput
/** 
 * Represents the input for <a>DeleteStream</a>.
**/
export class DeleteStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnforceConsumerDeletion" })
  enforceConsumerDeletion?: boolean;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
