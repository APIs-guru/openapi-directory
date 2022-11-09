import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class GetContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersGroupsNameOrIdRequest extends SpeakeasyBase {
    pathParams: GetContainersGroupsNameOrIdPathParams;
    headers: GetContainersGroupsNameOrIdHeaders;
}
export declare class GetContainersGroupsNameOrIdResponse extends SpeakeasyBase {
    containersGroupsNameOrIdGetDetails?: any;
    contentType: string;
    statusCode: number;
}
