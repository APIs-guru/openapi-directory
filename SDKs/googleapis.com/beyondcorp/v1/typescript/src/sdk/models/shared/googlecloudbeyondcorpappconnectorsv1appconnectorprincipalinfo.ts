import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount } from "./googlecloudbeyondcorpappconnectorsv1appconnectorprincipalinfoserviceaccount";



// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo
/** 
 * PrincipalInfo represents an Identity oneof.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount;
}
