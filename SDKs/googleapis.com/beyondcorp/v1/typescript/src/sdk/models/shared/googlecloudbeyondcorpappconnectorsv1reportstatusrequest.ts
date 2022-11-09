import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";


// GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest
/** 
 * Request report the connector status.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=resourceInfo" })
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
