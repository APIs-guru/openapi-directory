import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScimError
/** 
 * Scim Error
**/
export class ScimError extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=schemas" })
  schemas?: string[];

  @Metadata({ data: "json, name=scimType" })
  scimType?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
