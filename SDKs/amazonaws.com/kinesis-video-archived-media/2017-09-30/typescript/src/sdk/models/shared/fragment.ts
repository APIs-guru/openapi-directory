import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Fragment
/** 
 * Represents a segment of video or other time-delimited data.
**/
export class Fragment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FragmentLengthInMilliseconds" })
  fragmentLengthInMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=FragmentNumber" })
  fragmentNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=FragmentSizeInBytes" })
  fragmentSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=ProducerTimestamp" })
  producerTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServerTimestamp" })
  serverTimestamp?: Date;
}
