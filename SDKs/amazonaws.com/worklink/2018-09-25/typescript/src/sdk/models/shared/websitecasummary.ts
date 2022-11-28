import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebsiteCaSummary
/** 
 * The summary of the certificate authority (CA).
**/
export class WebsiteCaSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=WebsiteCaId" })
  websiteCaId?: string;
}
