import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetContainersIdStatusPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetContainersIdStatusHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersIdStatusRequest extends SpeakeasyBase {
    pathParams: GetContainersIdStatusPathParams;
    headers: GetContainersIdStatusHeaders;
}
export declare class GetContainersIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getContainerStatus?: any;
}
