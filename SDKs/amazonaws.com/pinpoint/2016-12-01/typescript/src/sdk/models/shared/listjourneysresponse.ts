import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JourneysResponse } from "./journeysresponse";


export class ListJourneysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JourneysResponse" })
  journeysResponse: JourneysResponse;
}
