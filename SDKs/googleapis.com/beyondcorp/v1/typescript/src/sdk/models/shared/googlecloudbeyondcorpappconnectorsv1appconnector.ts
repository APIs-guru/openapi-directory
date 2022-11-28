import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo } from "./googlecloudbeyondcorpappconnectorsv1appconnectorprincipalinfo";
import { GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo } from "./googlecloudbeyondcorpappconnectorsv1resourceinfo";


export enum GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}


// GoogleCloudBeyondcorpAppconnectorsV1AppConnector
/** 
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1AppConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=principalInfo" })
  principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;

  @SpeakeasyMetadata({ data: "json, name=resourceInfo" })
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput
/** 
 * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
**/
export class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=principalInfo" })
  principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;

  @SpeakeasyMetadata({ data: "json, name=resourceInfo" })
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
}
