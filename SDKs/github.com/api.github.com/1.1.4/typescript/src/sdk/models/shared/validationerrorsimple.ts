import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationErrorSimple
/** 
 * Validation Error Simple
**/
export class ValidationErrorSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=message" })
  message: string;
}
