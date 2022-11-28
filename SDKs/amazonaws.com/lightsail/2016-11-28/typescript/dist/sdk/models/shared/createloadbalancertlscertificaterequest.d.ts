import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateLoadBalancerTlsCertificateRequest extends SpeakeasyBase {
    certificateAlternativeNames?: string[];
    certificateDomainName: string;
    certificateName: string;
    loadBalancerName: string;
    tags?: Tag[];
}
