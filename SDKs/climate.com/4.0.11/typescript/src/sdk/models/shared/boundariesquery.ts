import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoundariesQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}
