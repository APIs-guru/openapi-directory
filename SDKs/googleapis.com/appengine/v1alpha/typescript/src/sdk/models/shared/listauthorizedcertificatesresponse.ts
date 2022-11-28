import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedCertificate } from "./authorizedcertificate";



// ListAuthorizedCertificatesResponse
/** 
 * Response message for AuthorizedCertificates.ListAuthorizedCertificates.
**/
export class ListAuthorizedCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: AuthorizedCertificate })
  certificates?: AuthorizedCertificate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
