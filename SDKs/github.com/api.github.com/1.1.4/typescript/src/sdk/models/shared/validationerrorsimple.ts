import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationErrorSimple
/** 
 * Validation Error Simple
**/
export class ValidationErrorSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
