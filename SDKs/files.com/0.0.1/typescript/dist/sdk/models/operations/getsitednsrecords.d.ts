import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSiteDnsRecordsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetSiteDnsRecordsRequest extends SpeakeasyBase {
    queryParams: GetSiteDnsRecordsQueryParams;
}
export declare class GetSiteDnsRecordsResponse extends SpeakeasyBase {
    contentType: string;
    dnsRecordEntities?: shared.DnsRecordEntity[];
    statusCode: number;
}
