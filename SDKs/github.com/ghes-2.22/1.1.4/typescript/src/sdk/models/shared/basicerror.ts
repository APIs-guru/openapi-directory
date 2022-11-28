import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BasicError
/** 
 * Basic Error
**/
export class BasicError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
