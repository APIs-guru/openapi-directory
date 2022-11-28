import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersNameOrIdFloatingIpsIpBindPathParams extends SpeakeasyBase {
    ip: string;
    nameOrId: string;
}
export declare class PostContainersNameOrIdFloatingIpsIpBindHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersNameOrIdFloatingIpsIpBindRequest extends SpeakeasyBase {
    pathParams: PostContainersNameOrIdFloatingIpsIpBindPathParams;
    headers: PostContainersNameOrIdFloatingIpsIpBindHeaders;
}
export declare class PostContainersNameOrIdFloatingIpsIpBindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
