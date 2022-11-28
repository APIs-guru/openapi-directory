import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1alpharesourceinfo";
/**
 * Request report the connector status.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest extends SpeakeasyBase {
    requestId?: string;
    resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo;
    validateOnly?: boolean;
}
