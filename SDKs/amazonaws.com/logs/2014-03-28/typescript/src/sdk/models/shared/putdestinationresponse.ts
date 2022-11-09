import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Destination } from "./destination";


export class PutDestinationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: Destination;
}
