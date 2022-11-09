import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDataSourceFromS3Output
/** 
 * <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
**/
export class CreateDataSourceFromS3Output extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;
}
