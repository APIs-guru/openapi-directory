import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebsiteCaSummary
/** 
 * The summary of the certificate authority (CA).
**/
export class WebsiteCaSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=WebsiteCaId" })
  websiteCaId?: string;
}
