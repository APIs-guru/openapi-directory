import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";



export class ListReceivedGrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Grants", elemType: Grant })
  grants?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
