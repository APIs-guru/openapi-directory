import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedCertificate } from "./authorizedcertificate";
/**
 * Response message for AuthorizedCertificates.ListAuthorizedCertificates.
**/
export declare class ListAuthorizedCertificatesResponse extends SpeakeasyBase {
    certificates?: AuthorizedCertificate[];
    nextPageToken?: string;
}
