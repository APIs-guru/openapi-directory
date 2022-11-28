import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpoint } from "./dbproxyendpoint";



export class DescribeDbProxyEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbProxyEndpoint })
  dbProxyEndpoints?: DbProxyEndpoint[];

  @SpeakeasyMetadata()
  marker?: string;
}
