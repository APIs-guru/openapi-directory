import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllocatedConnection } from "./allocatedconnection";

export enum AppGatewayHostTypeEnum {
    HostTypeUnspecified = "HOST_TYPE_UNSPECIFIED"
,    GcpRegionalMig = "GCP_REGIONAL_MIG"
}

export enum AppGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Created = "CREATED"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Down = "DOWN"
}

export enum AppGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    TcpProxy = "TCP_PROXY"
}


// AppGateway
/** 
 * A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
**/
export class AppGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocatedConnections", elemType: shared.AllocatedConnection })
  allocatedConnections?: AllocatedConnection[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=hostType" })
  hostType?: AppGatewayHostTypeEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: AppGatewayStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: AppGatewayTypeEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
