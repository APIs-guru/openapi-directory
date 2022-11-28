import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetRecordError
/** 
 * The error that has occurred when attempting to retrieve a batch of Records.
**/
export class BatchGetRecordError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}
