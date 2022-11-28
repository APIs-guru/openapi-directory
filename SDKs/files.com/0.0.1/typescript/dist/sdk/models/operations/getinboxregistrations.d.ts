import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInboxRegistrationsQueryParams extends SpeakeasyBase {
    cursor?: string;
    folderBehaviorId: number;
    perPage?: number;
}
export declare class GetInboxRegistrationsRequest extends SpeakeasyBase {
    queryParams: GetInboxRegistrationsQueryParams;
}
export declare class GetInboxRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    inboxRegistrationEntities?: shared.InboxRegistrationEntity[];
    statusCode: number;
}
