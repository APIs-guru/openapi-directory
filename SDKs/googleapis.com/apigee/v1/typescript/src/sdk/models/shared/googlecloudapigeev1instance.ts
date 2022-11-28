import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1InstancePeeringCidrRangeEnum {
    CidrRangeUnspecified = "CIDR_RANGE_UNSPECIFIED",
    Slash16 = "SLASH_16",
    Slash17 = "SLASH_17",
    Slash18 = "SLASH_18",
    Slash19 = "SLASH_19",
    Slash20 = "SLASH_20",
    Slash22 = "SLASH_22",
    Slash23 = "SLASH_23"
}

export enum GoogleCloudApigeeV1InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// GoogleCloudApigeeV1Instance
/** 
 * Apigee runtime instance.
**/
export class GoogleCloudApigeeV1Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerAcceptList" })
  consumerAcceptList?: string[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diskEncryptionKeyName" })
  diskEncryptionKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=ipRange" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peeringCidrRange" })
  peeringCidrRange?: GoogleCloudApigeeV1InstancePeeringCidrRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1InstanceStateEnum;
}


// GoogleCloudApigeeV1InstanceInput
/** 
 * Apigee runtime instance.
**/
export class GoogleCloudApigeeV1InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerAcceptList" })
  consumerAcceptList?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diskEncryptionKeyName" })
  diskEncryptionKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ipRange" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peeringCidrRange" })
  peeringCidrRange?: GoogleCloudApigeeV1InstancePeeringCidrRangeEnum;
}
