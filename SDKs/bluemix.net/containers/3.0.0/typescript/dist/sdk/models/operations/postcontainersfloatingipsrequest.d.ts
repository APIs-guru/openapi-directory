import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostContainersFloatingIpsRequestHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersFloatingIpsRequestRequest extends SpeakeasyBase {
    headers: PostContainersFloatingIpsRequestHeaders;
}
export declare class PostContainersFloatingIpsRequestResponse extends SpeakeasyBase {
    contentType: string;
    postContainersFloatingIpsRequest200ApplicationJsonString?: string;
    statusCode: number;
}
