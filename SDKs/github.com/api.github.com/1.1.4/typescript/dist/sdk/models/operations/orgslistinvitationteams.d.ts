import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListInvitationTeamsPathParams extends SpeakeasyBase {
    invitationId: number;
    org: string;
}
export declare class OrgsListInvitationTeamsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListInvitationTeamsRequest extends SpeakeasyBase {
    pathParams: OrgsListInvitationTeamsPathParams;
    queryParams: OrgsListInvitationTeamsQueryParams;
}
export declare class OrgsListInvitationTeamsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    teams?: shared.Team[];
}
