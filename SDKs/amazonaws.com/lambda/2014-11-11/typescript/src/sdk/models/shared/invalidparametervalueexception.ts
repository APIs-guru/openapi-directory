import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidParameterValueException
/** 
 * One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception. 
**/
export class InvalidParameterValueException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
