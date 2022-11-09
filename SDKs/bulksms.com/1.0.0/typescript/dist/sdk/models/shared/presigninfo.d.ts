import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PreSignInfoFields extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class PreSignInfo extends SpeakeasyBase {
    fetchUrl?: string;
    fields?: PreSignInfoFields[];
    putUrl?: string;
}
