import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway";
import { GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput } from "./googlecloudbeyondcorpappconnectionsv1alphaappconnectiongateway";


export enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}

export enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}


// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection
/** 
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint;

  @SpeakeasyMetadata({ data: "json, name=connectors" })
  connectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput
/** 
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint;

  @SpeakeasyMetadata({ data: "json, name=connectors" })
  connectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionTypeEnum;
}
