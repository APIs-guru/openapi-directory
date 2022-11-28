import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpoint } from "./dbproxyendpoint";



export class DeleteDbProxyEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxyEndpoint?: DbProxyEndpoint;
}
