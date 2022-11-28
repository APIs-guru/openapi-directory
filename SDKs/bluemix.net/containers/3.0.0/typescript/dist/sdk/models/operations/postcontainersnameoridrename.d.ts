import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdRenamePathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersNameOrIdRenameQueryParams extends SpeakeasyBase {
    name: string;
}
export declare class PostContainersNameOrIdRenameHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdRenameRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdRenamePathParams;
    queryParams: PostContainersNameOrIdRenameQueryParams;
    headers: PostContainersNameOrIdRenameHeaders;
}
export declare class PostContainersNameOrIdRenameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
