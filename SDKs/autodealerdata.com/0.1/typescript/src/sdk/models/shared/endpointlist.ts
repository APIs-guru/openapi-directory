import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EndpointList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endPoints" })
  endPoints?: string[];
}
