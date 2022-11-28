import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioComponent } from "./studiocomponent";



export class CreateStudioComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=studioComponent" })
  studioComponent?: StudioComponent;
}
