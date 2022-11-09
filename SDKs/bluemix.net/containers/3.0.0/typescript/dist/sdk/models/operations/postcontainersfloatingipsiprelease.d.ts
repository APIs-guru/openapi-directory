import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostContainersFloatingIpsIpReleasePathParams extends SpeakeasyBase {
    ip: string;
}
export declare class PostContainersFloatingIpsIpReleaseHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersFloatingIpsIpReleaseRequest extends SpeakeasyBase {
    pathParams: PostContainersFloatingIpsIpReleasePathParams;
    headers: PostContainersFloatingIpsIpReleaseHeaders;
}
export declare class PostContainersFloatingIpsIpReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
