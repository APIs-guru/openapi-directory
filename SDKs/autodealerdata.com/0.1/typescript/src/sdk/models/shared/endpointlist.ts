import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EndpointList extends SpeakeasyBase {
  @Metadata({ data: "json, name=endPoints" })
  endPoints?: string[];
}
