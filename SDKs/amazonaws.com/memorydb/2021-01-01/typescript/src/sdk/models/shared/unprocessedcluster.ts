import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnprocessedCluster
/** 
 * A cluster whose updates have failed
**/
export class UnprocessedCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=ErrorType" })
  errorType?: string;
}
