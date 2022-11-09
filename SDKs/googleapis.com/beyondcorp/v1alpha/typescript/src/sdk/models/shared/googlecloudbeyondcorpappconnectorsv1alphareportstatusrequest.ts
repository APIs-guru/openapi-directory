import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1alpharesourceinfo";


// GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest
/** 
 * Request report the connector status.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=resourceInfo" })
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
