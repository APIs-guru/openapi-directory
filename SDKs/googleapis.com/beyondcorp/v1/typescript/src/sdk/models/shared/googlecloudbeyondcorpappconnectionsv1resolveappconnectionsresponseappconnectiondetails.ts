import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnection } from "./googlecloudbeyondcorpappconnectionsv1appconnection";



// GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails
/** 
 * Details of the AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnection" })
  appConnection?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection;

  @SpeakeasyMetadata({ data: "json, name=recentMigVms" })
  recentMigVms?: string[];
}
