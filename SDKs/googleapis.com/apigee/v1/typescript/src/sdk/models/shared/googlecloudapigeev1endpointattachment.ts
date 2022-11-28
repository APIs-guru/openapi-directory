import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum {
    ConnectionStateUnspecified = "CONNECTION_STATE_UNSPECIFIED",
    Unavailable = "UNAVAILABLE",
    Pending = "PENDING",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    NeedsAttention = "NEEDS_ATTENTION"
}

export enum GoogleCloudApigeeV1EndpointAttachmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// GoogleCloudApigeeV1EndpointAttachmentInput
/** 
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
export class GoogleCloudApigeeV1EndpointAttachmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;
}


// GoogleCloudApigeeV1EndpointAttachment
/** 
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
export class GoogleCloudApigeeV1EndpointAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionState" })
  connectionState?: GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1EndpointAttachmentStateEnum;
}
