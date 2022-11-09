import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class DeleteContainersGroupsNameOrIdQueryParams extends SpeakeasyBase {
    force?: string;
}
export declare class DeleteContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class DeleteContainersGroupsNameOrIdRequest extends SpeakeasyBase {
    pathParams: DeleteContainersGroupsNameOrIdPathParams;
    queryParams: DeleteContainersGroupsNameOrIdQueryParams;
    headers: DeleteContainersGroupsNameOrIdHeaders;
}
export declare class DeleteContainersGroupsNameOrIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
