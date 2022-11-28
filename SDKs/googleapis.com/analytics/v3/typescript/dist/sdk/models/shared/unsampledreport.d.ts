import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download details for a file stored in Google Cloud Storage.
**/
export declare class UnsampledReportCloudStorageDownloadDetails extends SpeakeasyBase {
    bucketId?: string;
    objectId?: string;
}
/**
 * Download details for a file stored in Google Drive.
**/
export declare class UnsampledReportDriveDownloadDetails extends SpeakeasyBase {
    documentId?: string;
}
/**
 * JSON template for Analytics unsampled report resource.
**/
export declare class UnsampledReportInput extends SpeakeasyBase {
    accountId?: string;
    dimensions?: string;
    endDate?: string;
    filters?: string;
    id?: string;
    metrics?: string;
    profileId?: string;
    segment?: string;
    startDate?: string;
    title?: string;
    webPropertyId?: string;
}
/**
 * JSON template for Analytics unsampled report resource.
**/
export declare class UnsampledReport extends SpeakeasyBase {
    accountId?: string;
    cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;
    created?: Date;
    dimensions?: string;
    downloadType?: string;
    driveDownloadDetails?: UnsampledReportDriveDownloadDetails;
    endDate?: string;
    filters?: string;
    id?: string;
    kind?: string;
    metrics?: string;
    profileId?: string;
    segment?: string;
    selfLink?: string;
    startDate?: string;
    status?: string;
    title?: string;
    updated?: Date;
    webPropertyId?: string;
}
