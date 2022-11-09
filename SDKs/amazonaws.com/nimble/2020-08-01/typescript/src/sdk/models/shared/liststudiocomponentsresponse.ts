import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudioComponent } from "./studiocomponent";


export class ListStudioComponentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=studioComponents", elemType: shared.StudioComponent })
  studioComponents?: StudioComponent[];
}
