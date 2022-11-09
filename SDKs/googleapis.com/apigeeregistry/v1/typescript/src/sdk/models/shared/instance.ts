import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Config } from "./config";

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Inactive = "INACTIVE"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Failed = "FAILED"
}


// Instance
/** 
 * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: Config;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
