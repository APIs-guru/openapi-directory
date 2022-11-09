import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SerpData extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query: string;

  @Metadata({ data: "json, name=website" })
  website: string;
}
