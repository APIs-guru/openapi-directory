import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";



export class ListFleetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fleetDetails", elemType: Fleet })
  fleetDetails?: Fleet[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
