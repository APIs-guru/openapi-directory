import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDnsDomainNameRecordsRecordIdPathParams extends SpeakeasyBase {
    domainName: string;
    recordId: string;
}
export declare class DeleteDnsDomainNameRecordsRecordIdQueryParams extends SpeakeasyBase {
    domainName: string;
    recordId: string;
}
export declare class DeleteDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
    pathParams: DeleteDnsDomainNameRecordsRecordIdPathParams;
    queryParams: DeleteDnsDomainNameRecordsRecordIdQueryParams;
}
export declare class DeleteDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
