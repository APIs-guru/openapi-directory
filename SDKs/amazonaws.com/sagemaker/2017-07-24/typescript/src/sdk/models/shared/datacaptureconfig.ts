import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaptureContentTypeHeader } from "./capturecontenttypeheader";
import { CaptureOption } from "./captureoption";


// DataCaptureConfig
/** 
 * <p/>
**/
export class DataCaptureConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureContentTypeHeader" })
  captureContentTypeHeader?: CaptureContentTypeHeader;

  @Metadata({ data: "json, name=CaptureOptions", elemType: shared.CaptureOption })
  captureOptions: CaptureOption[];

  @Metadata({ data: "json, name=DestinationS3Uri" })
  destinationS3Uri: string;

  @Metadata({ data: "json, name=EnableCapture" })
  enableCapture?: boolean;

  @Metadata({ data: "json, name=InitialSamplingPercentage" })
  initialSamplingPercentage: number;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
