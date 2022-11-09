import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApigatewayGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// ApigatewayGateway
/** 
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
export class ApigatewayGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiConfig" })
  apiConfig?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=defaultHostname" })
  defaultHostname?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ApigatewayGatewayStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
