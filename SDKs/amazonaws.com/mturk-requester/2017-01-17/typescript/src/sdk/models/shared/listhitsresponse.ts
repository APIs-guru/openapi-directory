import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hit } from "./hit";


export class ListHiTsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HITs", elemType: shared.Hit })
  hiTs?: Hit[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;
}
