import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioComponent } from "./studiocomponent";


export class CreateStudioComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=studioComponent" })
  studioComponent?: StudioComponent;
}
