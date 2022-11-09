import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnection";


// GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails
/** 
 * Details of the AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnection" })
  appConnection?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection;

  @Metadata({ data: "json, name=recentMigVms" })
  recentMigVms?: string[];
}
