import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";



export class DescribeDestinationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: Destination })
  destinations?: Destination[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
