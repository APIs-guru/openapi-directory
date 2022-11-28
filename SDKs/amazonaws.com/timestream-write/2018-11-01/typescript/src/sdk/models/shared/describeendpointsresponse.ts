import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



export class DescribeEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoints", elemType: Endpoint })
  endpoints: Endpoint[];
}
