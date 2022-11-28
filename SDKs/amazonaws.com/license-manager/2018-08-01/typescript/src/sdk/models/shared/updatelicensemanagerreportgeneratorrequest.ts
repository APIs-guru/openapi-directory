import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { ReportTypeEnum } from "./reporttypeenum";



export class UpdateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseManagerReportGeneratorArn" })
  licenseManagerReportGeneratorArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReportContext" })
  reportContext: ReportContext;

  @SpeakeasyMetadata({ data: "json, name=ReportFrequency" })
  reportFrequency: ReportFrequency;

  @SpeakeasyMetadata({ data: "json, name=ReportGeneratorName" })
  reportGeneratorName: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ReportTypeEnum[];
}
