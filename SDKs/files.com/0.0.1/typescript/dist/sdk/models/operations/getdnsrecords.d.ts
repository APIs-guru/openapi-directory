import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDnsRecordsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetDnsRecordsRequest extends SpeakeasyBase {
    queryParams: GetDnsRecordsQueryParams;
}
export declare class GetDnsRecordsResponse extends SpeakeasyBase {
    contentType: string;
    dnsRecordEntities?: shared.DnsRecordEntity[];
    statusCode: number;
}
