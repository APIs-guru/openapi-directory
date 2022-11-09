import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1InstancePeeringCidrRangeEnum {
    CidrRangeUnspecified = "CIDR_RANGE_UNSPECIFIED"
,    Slash16 = "SLASH_16"
,    Slash17 = "SLASH_17"
,    Slash18 = "SLASH_18"
,    Slash19 = "SLASH_19"
,    Slash20 = "SLASH_20"
,    Slash22 = "SLASH_22"
,    Slash23 = "SLASH_23"
}

export enum GoogleCloudApigeeV1InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// GoogleCloudApigeeV1Instance
/** 
 * Apigee runtime instance.
**/
export class GoogleCloudApigeeV1Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerAcceptList" })
  consumerAcceptList?: string[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=diskEncryptionKeyName" })
  diskEncryptionKeyName?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=ipRange" })
  ipRange?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=peeringCidrRange" })
  peeringCidrRange?: GoogleCloudApigeeV1InstancePeeringCidrRangeEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1InstanceStateEnum;
}
