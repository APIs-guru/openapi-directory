import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaptureStatusEnum } from "./capturestatusenum";



// DataCaptureConfigSummary
/** 
 * <p/>
**/
export class DataCaptureConfigSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureStatus" })
  captureStatus: CaptureStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CurrentSamplingPercentage" })
  currentSamplingPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=DestinationS3Uri" })
  destinationS3Uri: string;

  @SpeakeasyMetadata({ data: "json, name=EnableCapture" })
  enableCapture: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId: string;
}
