import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1EnvironmentGroupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// GoogleCloudApigeeV1EnvironmentGroup
/** 
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
export class GoogleCloudApigeeV1EnvironmentGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=hostnames" })
  hostnames?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1EnvironmentGroupStateEnum;
}


// GoogleCloudApigeeV1EnvironmentGroupInput
/** 
 * EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
**/
export class GoogleCloudApigeeV1EnvironmentGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostnames" })
  hostnames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
