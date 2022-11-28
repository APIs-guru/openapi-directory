import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LimitExceededException
/** 
 *  There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request. 
**/
export class LimitExceededException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
