import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchError
/** 
 * Error related to a specific channel, specified by its ARN.
**/
export class BatchError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
