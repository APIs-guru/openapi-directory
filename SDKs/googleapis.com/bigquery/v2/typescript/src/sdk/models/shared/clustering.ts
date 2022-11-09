import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Clustering extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string[];
}
