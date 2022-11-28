import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WebsiteCaId" })
  websiteCaId?: string;
}
