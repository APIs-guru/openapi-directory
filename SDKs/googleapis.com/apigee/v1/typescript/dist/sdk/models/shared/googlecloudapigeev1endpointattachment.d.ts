import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum {
    ConnectionStateUnspecified = "CONNECTION_STATE_UNSPECIFIED",
    Unavailable = "UNAVAILABLE",
    Pending = "PENDING",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    NeedsAttention = "NEEDS_ATTENTION"
}
export declare enum GoogleCloudApigeeV1EndpointAttachmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
export declare class GoogleCloudApigeeV1EndpointAttachmentInput extends SpeakeasyBase {
    location?: string;
    name?: string;
    serviceAttachment?: string;
}
/**
 * Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).
**/
export declare class GoogleCloudApigeeV1EndpointAttachment extends SpeakeasyBase {
    connectionState?: GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum;
    host?: string;
    location?: string;
    name?: string;
    serviceAttachment?: string;
    state?: GoogleCloudApigeeV1EndpointAttachmentStateEnum;
}
