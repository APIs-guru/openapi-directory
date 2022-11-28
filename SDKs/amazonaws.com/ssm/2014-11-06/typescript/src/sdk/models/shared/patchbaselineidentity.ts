import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";



// PatchBaselineIdentity
/** 
 * Defines the basic information about a patch baseline.
**/
export class PatchBaselineIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineDescription" })
  baselineDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @SpeakeasyMetadata({ data: "json, name=BaselineName" })
  baselineName?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultBaseline" })
  defaultBaseline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
