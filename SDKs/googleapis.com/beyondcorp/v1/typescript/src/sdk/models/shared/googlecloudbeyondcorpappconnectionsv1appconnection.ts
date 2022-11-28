import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";


export enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}

export enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}


// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput
/** 
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;

  @SpeakeasyMetadata({ data: "json, name=connectors" })
  connectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
}


// GoogleCloudBeyondcorpAppconnectionsV1AppConnection
/** 
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;

  @SpeakeasyMetadata({ data: "json, name=connectors" })
  connectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
