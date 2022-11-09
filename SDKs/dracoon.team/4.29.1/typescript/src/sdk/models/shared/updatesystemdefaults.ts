import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateSystemDefaults
/** 
 * Request model for updating system defaults
**/
export class UpdateSystemDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadShareDefaultExpirationPeriod" })
  downloadShareDefaultExpirationPeriod?: number;

  @Metadata({ data: "json, name=fileDefaultExpirationPeriod" })
  fileDefaultExpirationPeriod?: number;

  @Metadata({ data: "json, name=languageDefault" })
  languageDefault?: string;

  @Metadata({ data: "json, name=nonmemberViewerDefault" })
  nonmemberViewerDefault?: boolean;

  @Metadata({ data: "json, name=uploadShareDefaultExpirationPeriod" })
  uploadShareDefaultExpirationPeriod?: number;
}
