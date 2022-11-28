import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsDeleteLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsDeleteLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteLegacyPathParams;
}
export declare class TeamsDeleteLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
