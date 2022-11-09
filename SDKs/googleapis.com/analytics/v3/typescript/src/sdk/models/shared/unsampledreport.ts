import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnsampledReportCloudStorageDownloadDetails
/** 
 * Download details for a file stored in Google Cloud Storage.
**/
export class UnsampledReportCloudStorageDownloadDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketId" })
  bucketId?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}


// UnsampledReportDriveDownloadDetails
/** 
 * Download details for a file stored in Google Drive.
**/
export class UnsampledReportDriveDownloadDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentId" })
  documentId?: string;
}


// UnsampledReport
/** 
 * JSON template for Analytics unsampled report resource.
**/
export class UnsampledReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=cloudStorageDownloadDetails" })
  cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string;

  @Metadata({ data: "json, name=downloadType" })
  downloadType?: string;

  @Metadata({ data: "json, name=driveDownloadDetails" })
  driveDownloadDetails?: UnsampledReportDriveDownloadDetails;

  @Metadata({ data: "json, name=end-date" })
  endDate?: string;

  @Metadata({ data: "json, name=filters" })
  filters?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=segment" })
  segment?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=start-date" })
  startDate?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
