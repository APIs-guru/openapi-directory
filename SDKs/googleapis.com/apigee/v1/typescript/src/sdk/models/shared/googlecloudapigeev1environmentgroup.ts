import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1EnvironmentGroupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// GoogleCloudApigeeV1EnvironmentGroup
/** 
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
export class GoogleCloudApigeeV1EnvironmentGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=hostnames" })
  hostnames?: string[];

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1EnvironmentGroupStateEnum;
}
