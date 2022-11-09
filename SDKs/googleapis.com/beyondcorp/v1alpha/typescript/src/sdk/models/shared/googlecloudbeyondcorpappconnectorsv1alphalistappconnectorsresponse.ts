import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnector";


// GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse
/** 
 * Response message for BeyondCorp.ListAppConnectors.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnectors", elemType: shared.GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector })
  appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
