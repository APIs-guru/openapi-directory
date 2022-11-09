import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetContainersNameOrIdJsonPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class GetContainersNameOrIdJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersNameOrIdJsonRequest extends SpeakeasyBase {
    pathParams: GetContainersNameOrIdJsonPathParams;
    headers: GetContainersNameOrIdJsonHeaders;
}
export declare class GetContainersNameOrIdJsonResponse extends SpeakeasyBase {
    containerInfo?: any;
    contentType: string;
    statusCode: number;
}
