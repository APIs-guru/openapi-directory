import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Thing } from "./thing";



export class SearchThingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=things", elemType: Thing })
  things?: Thing[];
}
