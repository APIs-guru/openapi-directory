import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScimError
/** 
 * Scim Error
**/
export class ScimError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas?: string[];

  @SpeakeasyMetadata({ data: "json, name=scimType" })
  scimType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
