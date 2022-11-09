import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Fragment
/** 
 * Represents a segment of video or other time-delimited data.
**/
export class Fragment extends SpeakeasyBase {
  @Metadata({ data: "json, name=FragmentLengthInMilliseconds" })
  fragmentLengthInMilliseconds?: number;

  @Metadata({ data: "json, name=FragmentNumber" })
  fragmentNumber?: string;

  @Metadata({ data: "json, name=FragmentSizeInBytes" })
  fragmentSizeInBytes?: number;

  @Metadata({ data: "json, name=ProducerTimestamp" })
  producerTimestamp?: Date;

  @Metadata({ data: "json, name=ServerTimestamp" })
  serverTimestamp?: Date;
}
