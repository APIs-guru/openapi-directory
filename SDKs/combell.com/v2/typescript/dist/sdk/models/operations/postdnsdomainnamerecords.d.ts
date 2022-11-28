import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDnsDomainNameRecordsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class PostDnsDomainNameRecordsQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class PostDnsDomainNameRecordsRequest extends SpeakeasyBase {
    pathParams: PostDnsDomainNameRecordsPathParams;
    queryParams: PostDnsDomainNameRecordsQueryParams;
    request?: shared.DnsRecord;
}
export declare class PostDnsDomainNameRecordsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
