import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Sign extends SpeakeasyBase {
    certificate: string;
    intermediateCerts: string[];
    nonce: string;
    signedData: string;
}
