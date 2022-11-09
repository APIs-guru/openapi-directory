import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BasicError
/** 
 * Basic Error
**/
export class BasicError extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
