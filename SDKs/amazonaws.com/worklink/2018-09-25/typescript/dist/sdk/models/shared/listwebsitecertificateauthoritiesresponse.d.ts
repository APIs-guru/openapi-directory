import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WebsiteCaSummary } from "./websitecasummary";
export declare class ListWebsiteCertificateAuthoritiesResponse extends SpeakeasyBase {
    nextToken?: string;
    websiteCertificateAuthorities?: WebsiteCaSummary[];
}
