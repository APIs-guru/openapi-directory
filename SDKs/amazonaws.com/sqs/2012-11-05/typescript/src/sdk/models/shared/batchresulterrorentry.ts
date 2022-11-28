import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchResultErrorEntry
/** 
 * Gives a detailed description of the result of an action on each entry in the request.
**/
export class BatchResultErrorEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  senderFault: boolean;
}
