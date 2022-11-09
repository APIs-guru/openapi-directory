import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceEndpointListItem } from "./resourceendpointlistitem";


export class GetSignalingChannelEndpointOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceEndpointList", elemType: shared.ResourceEndpointListItem })
  resourceEndpointList?: ResourceEndpointListItem[];
}
