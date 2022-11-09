import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Blueprint } from "./blueprint";


export class GetBlueprintsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=blueprints", elemType: shared.Blueprint })
  blueprints?: Blueprint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
