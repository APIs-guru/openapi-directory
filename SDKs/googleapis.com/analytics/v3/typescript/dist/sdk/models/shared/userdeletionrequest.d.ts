import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User ID.
**/
export declare class UserDeletionRequestId extends SpeakeasyBase {
    type?: string;
    userId?: string;
}
/**
 * JSON template for a user deletion request resource.
**/
export declare class UserDeletionRequest extends SpeakeasyBase {
    deletionRequestTime?: Date;
    firebaseProjectId?: string;
    id?: UserDeletionRequestId;
    kind?: string;
    propertyId?: string;
    webPropertyId?: string;
}
/**
 * JSON template for a user deletion request resource.
**/
export declare class UserDeletionRequestInput extends SpeakeasyBase {
    firebaseProjectId?: string;
    id?: UserDeletionRequestId;
    kind?: string;
    propertyId?: string;
    webPropertyId?: string;
}
