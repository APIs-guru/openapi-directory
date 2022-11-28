import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DomainsUpdateRequests extends SpeakeasyBase {
    apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;
    apiCoreDtoDomainsDomain1?: shared.ApiCoreDtoDomainsDomain;
    apiCoreDtoDomainsDomain2?: shared.ApiCoreDtoDomainsDomain;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class DomainsUpdateRequest extends SpeakeasyBase {
    pathParams: DomainsUpdatePathParams;
    request: DomainsUpdateRequests;
}
export declare class DomainsUpdateResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
