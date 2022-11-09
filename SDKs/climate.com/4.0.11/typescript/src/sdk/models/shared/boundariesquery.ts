import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BoundariesQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];
}
