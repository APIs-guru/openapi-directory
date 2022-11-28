import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1alpharesourceinfo";



// GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest
/** 
 * Request report the connector status.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceInfo" })
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
