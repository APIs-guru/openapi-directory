import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DomainsDeleteRequest extends SpeakeasyBase {
    pathParams: DomainsDeletePathParams;
}
export declare class DomainsDeleteResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
