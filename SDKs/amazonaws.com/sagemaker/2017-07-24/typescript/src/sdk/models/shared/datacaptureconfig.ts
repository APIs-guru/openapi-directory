import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaptureContentTypeHeader } from "./capturecontenttypeheader";
import { CaptureOption } from "./captureoption";



// DataCaptureConfig
/** 
 * <p/>
**/
export class DataCaptureConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureContentTypeHeader" })
  captureContentTypeHeader?: CaptureContentTypeHeader;

  @SpeakeasyMetadata({ data: "json, name=CaptureOptions", elemType: CaptureOption })
  captureOptions: CaptureOption[];

  @SpeakeasyMetadata({ data: "json, name=DestinationS3Uri" })
  destinationS3Uri: string;

  @SpeakeasyMetadata({ data: "json, name=EnableCapture" })
  enableCapture?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InitialSamplingPercentage" })
  initialSamplingPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
