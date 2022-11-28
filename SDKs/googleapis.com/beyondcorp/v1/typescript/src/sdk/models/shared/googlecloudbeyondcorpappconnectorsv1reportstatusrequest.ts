import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";



// GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest
/** 
 * Request report the connector status.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceInfo" })
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
