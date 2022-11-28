import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFrequencyTypeEnum } from "./reportfrequencytypeenum";



// ReportFrequency
/** 
 * Details on how frequently reports are generated.
**/
export class ReportFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: ReportFrequencyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
