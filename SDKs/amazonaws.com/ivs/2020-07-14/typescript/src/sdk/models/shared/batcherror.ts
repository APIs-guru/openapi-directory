import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchError
/** 
 * Error related to a specific channel, specified by its ARN.
**/
export class BatchError extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
