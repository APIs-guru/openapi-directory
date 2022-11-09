import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizedCertificate } from "./authorizedcertificate";


// ListAuthorizedCertificatesResponse
/** 
 * Response message for AuthorizedCertificates.ListAuthorizedCertificates.
**/
export class ListAuthorizedCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.AuthorizedCertificate })
  certificates?: AuthorizedCertificate[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
