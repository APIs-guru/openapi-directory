import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebsiteCaSummary } from "./websitecasummary";



export class ListWebsiteCertificateAuthoritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WebsiteCertificateAuthorities", elemType: WebsiteCaSummary })
  websiteCertificateAuthorities?: WebsiteCaSummary[];
}
