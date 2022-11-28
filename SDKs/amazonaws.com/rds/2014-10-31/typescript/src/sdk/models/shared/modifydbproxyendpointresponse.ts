import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpoint } from "./dbproxyendpoint";



export class ModifyDbProxyEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbProxyEndpoint?: DbProxyEndpoint;
}
