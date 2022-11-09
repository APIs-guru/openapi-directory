import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum {
    ConnectionStateUnspecified = "CONNECTION_STATE_UNSPECIFIED"
,    Unavailable = "UNAVAILABLE"
,    Pending = "PENDING"
,    Accepted = "ACCEPTED"
,    Rejected = "REJECTED"
,    Closed = "CLOSED"
,    Frozen = "FROZEN"
,    NeedsAttention = "NEEDS_ATTENTION"
}

export enum GoogleCloudApigeeV1EndpointAttachmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// GoogleCloudApigeeV1EndpointAttachment
/** 
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
export class GoogleCloudApigeeV1EndpointAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionState" })
  connectionState?: GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceAttachment" })
  serviceAttachment?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1EndpointAttachmentStateEnum;
}
