import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";



export class CreateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportContext" })
  reportContext: ReportContext;

  @SpeakeasyMetadata({ data: "json, name=ReportFrequency" })
  reportFrequency: ReportFrequency;

  @SpeakeasyMetadata({ data: "json, name=ReportGeneratorName" })
  reportGeneratorName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ReportTypeEnum[];
}
