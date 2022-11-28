import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { ReportTypeEnum } from "./reporttypeenum";
import { S3Location } from "./s3location";
import { Tag } from "./tag";



// ReportGenerator
/** 
 * Describe the details of a report generator.
**/
export class ReportGenerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastReportGenerationTime" })
  lastReportGenerationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LastRunFailureReason" })
  lastRunFailureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastRunStatus" })
  lastRunStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseManagerReportGeneratorArn" })
  licenseManagerReportGeneratorArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportContext" })
  reportContext?: ReportContext;

  @SpeakeasyMetadata({ data: "json, name=ReportCreatorAccount" })
  reportCreatorAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportFrequency" })
  reportFrequency?: ReportFrequency;

  @SpeakeasyMetadata({ data: "json, name=ReportGeneratorName" })
  reportGeneratorName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportType" })
  reportType?: ReportTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=S3Location" })
  s3Location?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
