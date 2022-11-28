import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGenerator } from "./reportgenerator";



export class GetLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportGenerator" })
  reportGenerator?: ReportGenerator;
}
