import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastReportGenerationTime" })
  lastReportGenerationTime?: string;

  @Metadata({ data: "json, name=LastRunFailureReason" })
  lastRunFailureReason?: string;

  @Metadata({ data: "json, name=LastRunStatus" })
  lastRunStatus?: string;

  @Metadata({ data: "json, name=LicenseManagerReportGeneratorArn" })
  licenseManagerReportGeneratorArn?: string;

  @Metadata({ data: "json, name=ReportContext" })
  reportContext?: ReportContext;

  @Metadata({ data: "json, name=ReportCreatorAccount" })
  reportCreatorAccount?: string;

  @Metadata({ data: "json, name=ReportFrequency" })
  reportFrequency?: ReportFrequency;

  @Metadata({ data: "json, name=ReportGeneratorName" })
  reportGeneratorName?: string;

  @Metadata({ data: "json, name=ReportType" })
  reportType?: ReportTypeEnum[];

  @Metadata({ data: "json, name=S3Location" })
  s3Location?: S3Location;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
