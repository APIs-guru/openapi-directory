import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamProcessorStatusEnum } from "./streamprocessorstatusenum";


// StreamProcessor
/** 
 * An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts. 
**/
export class StreamProcessor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StreamProcessorStatusEnum;
}
