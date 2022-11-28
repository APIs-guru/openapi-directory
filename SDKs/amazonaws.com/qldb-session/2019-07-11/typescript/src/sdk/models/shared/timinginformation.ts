import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimingInformation
/** 
 * Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response.
**/
export class TimingInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessingTimeMilliseconds" })
  processingTimeMilliseconds?: number;
}
