import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2GetInvitedIndividualsPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2GetInvitedIndividualsQueryParams extends SpeakeasyBase {
    currentpage: number;
}
export declare class GroupV2GetInvitedIndividualsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2GetInvitedIndividualsRequest extends SpeakeasyBase {
    pathParams: GroupV2GetInvitedIndividualsPathParams;
    queryParams: GroupV2GetInvitedIndividualsQueryParams;
    security: GroupV2GetInvitedIndividualsSecurity;
}
export declare class GroupV2GetInvitedIndividualsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
