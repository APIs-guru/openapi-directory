import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
**/
export declare class ExternalData extends SpeakeasyBase {
    sha256Hash?: string;
    url?: string;
}
