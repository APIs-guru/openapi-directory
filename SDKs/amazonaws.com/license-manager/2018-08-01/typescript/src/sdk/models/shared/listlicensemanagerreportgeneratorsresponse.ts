import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGenerator } from "./reportgenerator";



export class ListLicenseManagerReportGeneratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportGenerators", elemType: ReportGenerator })
  reportGenerators?: ReportGenerator[];
}
