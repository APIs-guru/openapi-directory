import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HomeRegionControl } from "./homeregioncontrol";


export class CreateHomeRegionControlResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=HomeRegionControl" })
  homeRegionControl?: HomeRegionControl;
}
