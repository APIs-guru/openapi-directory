import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EurekaInfoQueryParams extends SpeakeasyBase {
    nonce: number;
    options: string;
    params: string;
}
export declare class EurekaInfoRequest extends SpeakeasyBase {
    queryParams: EurekaInfoQueryParams;
}
export declare class EurekaInfoResponse extends SpeakeasyBase {
    contentType: string;
    example1?: shared.Example1;
    statusCode: number;
}
