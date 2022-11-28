import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsConvertMemberToOutsideCollaboratorPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsConvertMemberToOutsideCollaborator403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
    pathParams: OrgsConvertMemberToOutsideCollaboratorPathParams;
}
export declare class OrgsConvertMemberToOutsideCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgsConvertMemberToOutsideCollaborator403ApplicationJsonObject?: OrgsConvertMemberToOutsideCollaborator403ApplicationJson;
}
