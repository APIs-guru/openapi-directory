import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnector } from "./googlecloudbeyondcorpappconnectorsv1appconnector";


// GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse
/** 
 * Response message for BeyondCorp.ListAppConnectors.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnectors", elemType: shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnector })
  appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1AppConnector[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
