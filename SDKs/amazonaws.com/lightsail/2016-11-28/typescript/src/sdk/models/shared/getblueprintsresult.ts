import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Blueprint } from "./blueprint";



export class GetBlueprintsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blueprints", elemType: Blueprint })
  blueprints?: Blueprint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
