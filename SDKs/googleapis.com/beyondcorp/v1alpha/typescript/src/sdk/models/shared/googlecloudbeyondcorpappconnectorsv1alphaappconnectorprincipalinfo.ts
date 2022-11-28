import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnectorprincipalinfoserviceaccount";



// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo
/** 
 * PrincipalInfo represents an Identity oneof.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount;
}
