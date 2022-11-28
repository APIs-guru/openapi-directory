import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDbClusterEndpointOutput
/** 
 * <p>This data type represents the information you need to connect to an Amazon Neptune DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
**/
export class DeleteDbClusterEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customEndpointType?: string;

  @SpeakeasyMetadata()
  dbClusterEndpointArn?: string;

  @SpeakeasyMetadata()
  dbClusterEndpointIdentifier?: string;

  @SpeakeasyMetadata()
  dbClusterEndpointResourceIdentifier?: string;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  endpointType?: string;

  @SpeakeasyMetadata()
  excludedMembers?: string[];

  @SpeakeasyMetadata()
  staticMembers?: string[];

  @SpeakeasyMetadata()
  status?: string;
}
