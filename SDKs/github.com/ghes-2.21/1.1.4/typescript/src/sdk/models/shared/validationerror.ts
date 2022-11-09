import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidationErrorErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}


// ValidationError
/** 
 * Validation Error
**/
export class ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=errors", elemType: shared.ValidationErrorErrors })
  errors?: ValidationErrorErrors[];

  @Metadata({ data: "json, name=message" })
  message: string;
}
