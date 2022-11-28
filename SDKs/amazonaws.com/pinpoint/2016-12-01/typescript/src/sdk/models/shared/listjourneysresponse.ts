import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneysResponse } from "./journeysresponse";



export class ListJourneysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneysResponse" })
  journeysResponse: JourneysResponse;
}
