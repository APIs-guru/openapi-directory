import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateSystemDefaults
/** 
 * Request model for updating system defaults
**/
export class UpdateSystemDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadShareDefaultExpirationPeriod" })
  downloadShareDefaultExpirationPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=fileDefaultExpirationPeriod" })
  fileDefaultExpirationPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=languageDefault" })
  languageDefault?: string;

  @SpeakeasyMetadata({ data: "json, name=nonmemberViewerDefault" })
  nonmemberViewerDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uploadShareDefaultExpirationPeriod" })
  uploadShareDefaultExpirationPeriod?: number;
}
