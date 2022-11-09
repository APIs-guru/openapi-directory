import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationEndpoint } from "./applicationendpoint";
import { Gateway } from "./gateway";

export enum ConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Created = "CREATED"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Down = "DOWN"
}

export enum ConnectionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    TcpProxy = "TCP_PROXY"
}


// Connection
/** 
 * A BeyondCorp Connection resource represents a BeyondCorp protected connection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected connection. Multiple connectors can be authorised for a single Connection.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationEndpoint" })
  applicationEndpoint?: ApplicationEndpoint;

  @Metadata({ data: "json, name=connectors" })
  connectors?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gateway" })
  gateway?: Gateway;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ConnectionStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
