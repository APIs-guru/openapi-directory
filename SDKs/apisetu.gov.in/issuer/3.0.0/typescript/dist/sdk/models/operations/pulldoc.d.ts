import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PullDocHeaders extends SpeakeasyBase {
    contentType?: string;
    xDigilockerHmac?: string;
}
export declare class PullDocRequest extends SpeakeasyBase {
    headers: PullDocHeaders;
    request?: Uint8Array;
}
export declare class PullDocResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
