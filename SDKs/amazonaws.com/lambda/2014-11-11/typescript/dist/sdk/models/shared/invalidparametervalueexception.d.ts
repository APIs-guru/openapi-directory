import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.
**/
export declare class InvalidParameterValueException extends SpeakeasyBase {
    type?: string;
    message?: string;
}
