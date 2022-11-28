import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDnsDomainNameRecordsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetDnsDomainNameRecordsQueryParams extends SpeakeasyBase {
    domainName: string;
    recordName?: string;
    service?: string;
    skip?: number;
    take?: number;
    type?: string;
}
export declare class GetDnsDomainNameRecordsRequest extends SpeakeasyBase {
    pathParams: GetDnsDomainNameRecordsPathParams;
    queryParams: GetDnsDomainNameRecordsQueryParams;
}
export declare class GetDnsDomainNameRecordsResponse extends SpeakeasyBase {
    contentType: string;
    dnsRecords?: shared.DnsRecord[];
    headers: Map<string, string[]>;
    statusCode: number;
}
