import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnsampledReportCloudStorageDownloadDetails
/** 
 * Download details for a file stored in Google Cloud Storage.
**/
export class UnsampledReportCloudStorageDownloadDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketId" })
  bucketId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}


// UnsampledReportDriveDownloadDetails
/** 
 * Download details for a file stored in Google Drive.
**/
export class UnsampledReportDriveDownloadDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;
}


// UnsampledReportInput
/** 
 * JSON template for Analytics unsampled report resource.
**/
export class UnsampledReportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @SpeakeasyMetadata({ data: "json, name=end-date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: string;

  @SpeakeasyMetadata({ data: "json, name=start-date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}


// UnsampledReport
/** 
 * JSON template for Analytics unsampled report resource.
**/
export class UnsampledReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudStorageDownloadDetails" })
  cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadType" })
  downloadType?: string;

  @SpeakeasyMetadata({ data: "json, name=driveDownloadDetails" })
  driveDownloadDetails?: UnsampledReportDriveDownloadDetails;

  @SpeakeasyMetadata({ data: "json, name=end-date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=start-date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
