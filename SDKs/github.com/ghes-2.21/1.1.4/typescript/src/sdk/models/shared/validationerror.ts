import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidationErrorErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}


// ValidationError
/** 
 * Validation Error
**/
export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ValidationErrorErrors })
  errors?: ValidationErrorErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
