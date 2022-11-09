import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint } from "./googlecloudbeyondcorpappconnectionsv1appconnectionapplicationendpoint";
import { GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway } from "./googlecloudbeyondcorpappconnectionsv1appconnectiongateway";

export enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Created = "CREATED"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Down = "DOWN"
}

export enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    TcpProxy = "TCP_PROXY"
}


// GoogleCloudBeyondcorpAppconnectionsV1AppConnection
/** 
 * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;

  @Metadata({ data: "json, name=connectors" })
  connectors?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gateway" })
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
