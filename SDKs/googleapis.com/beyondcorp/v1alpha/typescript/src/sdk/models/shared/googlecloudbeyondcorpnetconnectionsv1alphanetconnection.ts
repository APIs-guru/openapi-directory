import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Created = "CREATED"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Down = "DOWN"
}


// GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection
/** 
 * A BeyondCorp NetConnection resource represents a BeyondCorp protected connection from BeyondCorp Client Connector to a remote application through a BeyondCorp AppConnector gateway.
**/
export class GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectors" })
  connectors?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=destinationCidrs" })
  destinationCidrs?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkVpc" })
  networkVpc?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudBeyondcorpNetconnectionsV1alphaNetConnectionStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
