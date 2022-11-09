import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Fleet } from "./fleet";


export class ListFleetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleetDetails", elemType: shared.Fleet })
  fleetDetails?: Fleet[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
