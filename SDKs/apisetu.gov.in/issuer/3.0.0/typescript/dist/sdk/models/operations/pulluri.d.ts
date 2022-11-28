import { SpeakeasyBase } from "../../../internal/utils";
export declare class PullUriHeaders extends SpeakeasyBase {
    contentType?: string;
    xDigilockerHmac?: string;
}
export declare class PullUriRequest extends SpeakeasyBase {
    headers: PullUriHeaders;
    request?: Uint8Array;
}
export declare class PullUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
