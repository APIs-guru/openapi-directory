import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApigatewayGatewayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// ApigatewayGateway
/** 
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
export class ApigatewayGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiConfig" })
  apiConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultHostname" })
  defaultHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ApigatewayGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ApigatewayGatewayInput
/** 
 * A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
**/
export class ApigatewayGatewayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiConfig" })
  apiConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
