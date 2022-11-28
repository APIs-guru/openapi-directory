import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdFloatingIpsIpUnbindPathParams extends SpeakeasyBase {
    ip: string;
    nameOrId: string;
}
export declare class PostContainersNameOrIdFloatingIpsIpUnbindHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdFloatingIpsIpUnbindRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdFloatingIpsIpUnbindPathParams;
    headers: PostContainersNameOrIdFloatingIpsIpUnbindHeaders;
}
export declare class PostContainersNameOrIdFloatingIpsIpUnbindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
