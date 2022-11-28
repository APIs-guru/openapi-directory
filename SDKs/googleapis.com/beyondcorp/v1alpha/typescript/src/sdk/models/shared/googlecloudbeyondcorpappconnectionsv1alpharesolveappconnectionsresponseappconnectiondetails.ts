import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnection";



// GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails
/** 
 * Details of the AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appConnection" })
  appConnection?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;

  @SpeakeasyMetadata({ data: "json, name=recentMigVms" })
  recentMigVms?: string[];
}
