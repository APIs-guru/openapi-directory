import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteContainersNameOrIdPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class DeleteContainersNameOrIdQueryParams extends SpeakeasyBase {
    force?: boolean;
}
export declare class DeleteContainersNameOrIdHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class DeleteContainersNameOrIdRequest extends SpeakeasyBase {
    pathParams: DeleteContainersNameOrIdPathParams;
    queryParams: DeleteContainersNameOrIdQueryParams;
    headers: DeleteContainersNameOrIdHeaders;
}
export declare class DeleteContainersNameOrIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
