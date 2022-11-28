import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrgsRemoveOutsideCollaboratorPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsRemoveOutsideCollaborator422ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class OrgsRemoveOutsideCollaboratorRequest extends SpeakeasyBase {
    pathParams: OrgsRemoveOutsideCollaboratorPathParams;
}
export declare class OrgsRemoveOutsideCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgsRemoveOutsideCollaborator422ApplicationJsonObject?: OrgsRemoveOutsideCollaborator422ApplicationJson;
}
