import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsRemoveProjectLegacyPathParams extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
export declare class TeamsRemoveProjectLegacy415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class TeamsRemoveProjectLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveProjectLegacyPathParams;
}
export declare class TeamsRemoveProjectLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teamsRemoveProjectLegacy415ApplicationJsonObject?: TeamsRemoveProjectLegacy415ApplicationJson;
    validationError?: shared.ValidationError;
}
