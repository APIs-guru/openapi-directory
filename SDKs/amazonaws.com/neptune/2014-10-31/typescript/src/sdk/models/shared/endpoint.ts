import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Endpoint
/** 
 * <p>Specifies a connection endpoint.</p> <p>For the data structure that represents Amazon Neptune DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

  @SpeakeasyMetadata()
  port?: number;
}
