import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebsiteCaSummary } from "./websitecasummary";


export class ListWebsiteCertificateAuthoritiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WebsiteCertificateAuthorities", elemType: shared.WebsiteCaSummary })
  websiteCertificateAuthorities?: WebsiteCaSummary[];
}
