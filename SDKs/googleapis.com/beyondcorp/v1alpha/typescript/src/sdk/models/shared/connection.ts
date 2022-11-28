import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEndpoint } from "./applicationendpoint";
import { GatewayInput } from "./gateway";
import { Gateway } from "./gateway";


export enum ConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Down = "DOWN"
}

export enum ConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TcpProxy = "TCP_PROXY"
}


// ConnectionInput
/** 
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
export class ConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: ApplicationEndpoint;

  @SpeakeasyMetadata({ data: "json, name=connectors" })
  connectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: GatewayInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ConnectionTypeEnum;
}


// Connection
/** 
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: ApplicationEndpoint;

  @SpeakeasyMetadata({ data: "json, name=connectors" })
  connectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: Gateway;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
