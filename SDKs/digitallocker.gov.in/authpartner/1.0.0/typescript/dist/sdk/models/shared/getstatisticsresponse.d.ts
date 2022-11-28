import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatisticsResponseMonthwiseRegistationsDetails2 extends SpeakeasyBase {
    count?: number;
    id?: number;
    month?: number;
    year?: number;
}
/**
 * List of last 12 months cumulative user registrations
**/
export declare class GetStatisticsResponseMonthwiseRegistations extends SpeakeasyBase {
    count?: number;
    details2?: GetStatisticsResponseMonthwiseRegistationsDetails2;
    id?: number;
    month?: number;
    year?: number;
}
export declare class GetStatisticsResponseYearwiseAuthenticDocumentsDetails extends SpeakeasyBase {
    count?: number;
    id?: number;
    year?: number;
}
export declare class GetStatisticsResponseYearwiseAuthenticDocumentsDetails1 extends SpeakeasyBase {
    count?: number;
    id?: number;
    year?: number;
}
export declare class GetStatisticsResponseYearwiseAuthenticDocumentsDetails2 extends SpeakeasyBase {
    count?: number;
    id?: number;
    year?: number;
}
/**
 * List of cumulative year-wise counts of authentic documents in DigiLocker.
**/
export declare class GetStatisticsResponseYearwiseAuthenticDocuments extends SpeakeasyBase {
    count?: number;
    details?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails;
    details1?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails1;
    details2?: GetStatisticsResponseYearwiseAuthenticDocumentsDetails2;
    id?: number;
    year?: number;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    authenticDocuments: string;
    countAsOn: string;
    issuers: string;
    monthwiseRegistations: GetStatisticsResponseMonthwiseRegistations;
    requestors: string;
    users: string;
    yearwiseAuthenticDocuments: GetStatisticsResponseYearwiseAuthenticDocuments;
}
