import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
    domainName: string;
    recordId: string;
}
export declare class PutDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
    domainName: string;
    recordId: string;
}
export declare class PutDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
    pathParams: PutDnsDomainNameRecordsRecordIdPathParams;
    queryParams: PutDnsDomainNameRecordsRecordIdQueryParams;
    request?: shared.DnsRecord;
}
export declare class PutDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
