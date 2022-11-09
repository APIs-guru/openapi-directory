import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";


// PatchBaselineIdentity
/** 
 * Defines the basic information about a patch baseline.
**/
export class PatchBaselineIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineDescription" })
  baselineDescription?: string;

  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @Metadata({ data: "json, name=BaselineName" })
  baselineName?: string;

  @Metadata({ data: "json, name=DefaultBaseline" })
  defaultBaseline?: boolean;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
