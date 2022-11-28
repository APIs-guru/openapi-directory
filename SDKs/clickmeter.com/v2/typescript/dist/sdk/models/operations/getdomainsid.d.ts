import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetDomainsIdRequest extends SpeakeasyBase {
    pathParams: GetDomainsIdPathParams;
}
export declare class GetDomainsIdResponse extends SpeakeasyBase {
    apiCoreDtoDomainsDomain?: shared.ApiCoreDtoDomainsDomain;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
