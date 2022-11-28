import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";



// Endpoint
/** 
 * Describes a connection endpoint.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcEndpoint })
  vpcEndpoints?: VpcEndpoint[];
}
