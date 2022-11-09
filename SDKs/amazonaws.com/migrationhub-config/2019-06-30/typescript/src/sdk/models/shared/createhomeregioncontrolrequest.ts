import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";


export class CreateHomeRegionControlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @Metadata({ data: "json, name=Target" })
  target: Target;
}
