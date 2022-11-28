import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedCluster
/** 
 * A cluster whose updates have failed
**/
export class UnprocessedCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorType" })
  errorType?: string;
}
