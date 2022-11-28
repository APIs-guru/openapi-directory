import { SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class UpdateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    licenseManagerReportGeneratorArn: string;
    reportContext: ReportContext;
    reportFrequency: ReportFrequency;
    reportGeneratorName: string;
    type: ReportTypeEnum[];
}
