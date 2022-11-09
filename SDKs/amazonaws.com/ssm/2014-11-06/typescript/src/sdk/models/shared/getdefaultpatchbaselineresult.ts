import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";


export class GetDefaultPatchBaselineResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
