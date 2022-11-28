import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceEndpointListItem } from "./resourceendpointlistitem";



export class GetSignalingChannelEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceEndpointList", elemType: ResourceEndpointListItem })
  resourceEndpointList?: ResourceEndpointListItem[];
}
