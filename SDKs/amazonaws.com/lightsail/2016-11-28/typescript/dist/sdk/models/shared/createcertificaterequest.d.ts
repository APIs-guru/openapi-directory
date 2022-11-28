import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateCertificateRequest extends SpeakeasyBase {
    certificateName: string;
    domainName: string;
    subjectAlternativeNames?: string[];
    tags?: Tag[];
}
