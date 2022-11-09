import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount } from "./googlecloudbeyondcorpappconnectorsv1alphaappconnectorprincipalinfoserviceaccount";


// GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo
/** 
 * PrincipalInfo represents an Identity oneof.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorPrincipalInfoServiceAccount;
}
