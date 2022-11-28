import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpoint } from "./dbproxyendpoint";



export class CreateDbProxyEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxyEndpoint?: DbProxyEndpoint;
}
