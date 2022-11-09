import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportFrequencyTypeEnum } from "./reportfrequencytypeenum";


// ReportFrequency
/** 
 * Details on how frequently reports are generated.
**/
export class ReportFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=period" })
  period?: ReportFrequencyTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
