import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetRecordError
/** 
 * The error that has occurred when attempting to retrieve a batch of Records.
**/
export class BatchGetRecordError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage: string;

  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @Metadata({ data: "json, name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}
