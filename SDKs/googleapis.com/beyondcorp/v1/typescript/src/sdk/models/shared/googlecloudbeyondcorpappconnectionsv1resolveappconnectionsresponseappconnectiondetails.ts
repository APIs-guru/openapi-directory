import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnection } from "./googlecloudbeyondcorpappconnectionsv1appconnection";


// GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails
/** 
 * Details of the AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=appConnection" })
  appConnection?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection;

  @Metadata({ data: "json, name=recentMigVms" })
  recentMigVms?: string[];
}
