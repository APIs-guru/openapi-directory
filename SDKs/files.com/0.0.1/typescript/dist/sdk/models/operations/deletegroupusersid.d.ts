import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGroupUsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteGroupUsersIdQueryParams extends SpeakeasyBase {
    groupId: number;
    userId: number;
}
export declare class DeleteGroupUsersIdRequest extends SpeakeasyBase {
    pathParams: DeleteGroupUsersIdPathParams;
    queryParams: DeleteGroupUsersIdQueryParams;
}
export declare class DeleteGroupUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
