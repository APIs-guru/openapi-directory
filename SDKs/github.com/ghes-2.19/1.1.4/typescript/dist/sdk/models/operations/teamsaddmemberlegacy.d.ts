import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsAddMemberLegacyPathParams extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsAddMemberLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsAddMemberLegacyPathParams;
}
export declare class TeamsAddMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
