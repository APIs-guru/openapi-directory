import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hit } from "./hit";



export class ListHiTsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HITs", elemType: Hit })
  hiTs?: Hit[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;
}
