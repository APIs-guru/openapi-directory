import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsConvertMemberToOutsideCollaboratorPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsConvertMemberToOutsideCollaboratorRequest extends SpeakeasyBase {
    pathParams: OrgsConvertMemberToOutsideCollaboratorPathParams;
}
export declare class OrgsConvertMemberToOutsideCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgsConvertMemberToOutsideCollaborator202ApplicationJsonObject?: Map<string, any>;
}
