import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



export class CreateHomeRegionControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: Target;
}
