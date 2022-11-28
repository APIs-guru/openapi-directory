import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Data returned by the <b>DescribeCertificates</b> action.
**/
export declare class CertificateMessage extends SpeakeasyBase {
    certificates?: Certificate[];
    marker?: string;
}
