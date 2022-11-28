import { SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class CreateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    reportContext: ReportContext;
    reportFrequency: ReportFrequency;
    reportGeneratorName: string;
    tags?: Tag[];
    type: ReportTypeEnum[];
}
