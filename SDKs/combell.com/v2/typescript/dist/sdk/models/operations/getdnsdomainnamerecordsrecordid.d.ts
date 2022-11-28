import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
    domainName: string;
    recordId: string;
}
export declare class GetDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
    domainName: string;
    recordId: string;
}
export declare class GetDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
    pathParams: GetDnsDomainNameRecordsRecordIdPathParams;
    queryParams: GetDnsDomainNameRecordsRecordIdQueryParams;
}
export declare class GetDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
    contentType: string;
    dnsRecord?: shared.DnsRecord;
    statusCode: number;
}
