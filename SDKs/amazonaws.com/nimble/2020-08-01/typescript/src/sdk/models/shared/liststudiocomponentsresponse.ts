import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioComponent } from "./studiocomponent";



export class ListStudioComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponents", elemType: StudioComponent })
  studioComponents?: StudioComponent[];
}
