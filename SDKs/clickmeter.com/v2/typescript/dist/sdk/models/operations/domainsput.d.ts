import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsPutRequests extends SpeakeasyBase {
    apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;
    apiCoreDtoDomainsDomain1?: shared.ApiCoreDtoDomainsDomain;
    apiCoreDtoDomainsDomain2?: shared.ApiCoreDtoDomainsDomain;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class DomainsPutRequest extends SpeakeasyBase {
    request: DomainsPutRequests;
}
export declare class DomainsPutResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
