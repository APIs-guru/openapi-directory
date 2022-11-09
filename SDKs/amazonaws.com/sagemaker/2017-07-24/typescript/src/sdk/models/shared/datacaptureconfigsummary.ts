import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaptureStatusEnum } from "./capturestatusenum";


// DataCaptureConfigSummary
/** 
 * <p/>
**/
export class DataCaptureConfigSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureStatus" })
  captureStatus: CaptureStatusEnum;

  @Metadata({ data: "json, name=CurrentSamplingPercentage" })
  currentSamplingPercentage: number;

  @Metadata({ data: "json, name=DestinationS3Uri" })
  destinationS3Uri: string;

  @Metadata({ data: "json, name=EnableCapture" })
  enableCapture: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId: string;
}
