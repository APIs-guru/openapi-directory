import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartialFailure
/** 
 * This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.
**/
export class PartialFailure extends SpeakeasyBase {
  @SpeakeasyMetadata()
  exceptionType?: string;

  @SpeakeasyMetadata()
  failureCode?: string;

  @SpeakeasyMetadata()
  failureDescription?: string;

  @SpeakeasyMetadata()
  failureResource?: string;
}
