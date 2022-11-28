import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Clustering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];
}
