import { SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { ReportTypeEnum } from "./reporttypeenum";
import { S3Location } from "./s3location";
import { Tag } from "./tag";
/**
 * Describe the details of a report generator.
**/
export declare class ReportGenerator extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    lastReportGenerationTime?: string;
    lastRunFailureReason?: string;
    lastRunStatus?: string;
    licenseManagerReportGeneratorArn?: string;
    reportContext?: ReportContext;
    reportCreatorAccount?: string;
    reportFrequency?: ReportFrequency;
    reportGeneratorName?: string;
    reportType?: ReportTypeEnum[];
    s3Location?: S3Location;
    tags?: Tag[];
}
