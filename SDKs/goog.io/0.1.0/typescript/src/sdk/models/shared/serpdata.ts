import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SerpData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website: string;
}
