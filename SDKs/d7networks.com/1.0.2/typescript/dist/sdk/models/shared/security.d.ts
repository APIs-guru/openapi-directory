import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    auth: SchemeAuth;
}
