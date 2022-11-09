import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApigatewayApiStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// ApigatewayApi
/** 
 * An API that can be served by one or more Gateways.
**/
export class ApigatewayApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=managedService" })
  managedService?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ApigatewayApiStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
