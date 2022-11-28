import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";
/**
 * Request report the connector status.
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest extends SpeakeasyBase {
    requestId?: string;
    resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
    validateOnly?: boolean;
}
