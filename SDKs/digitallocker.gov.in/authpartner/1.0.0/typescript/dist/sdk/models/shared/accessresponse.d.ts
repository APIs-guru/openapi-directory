import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AccessResponseEaadharEnum {
    Y = "Y",
    N = "N"
}
export declare enum AccessResponseGenderEnum {
    M = "M",
    F = "F",
    T = "T"
}
export declare class AccessResponse extends SpeakeasyBase {
    accessToken: string;
    digilockerId: string;
    dob: number;
    eaadhar: AccessResponseEaadharEnum;
    expiresIn: number;
    gender: AccessResponseGenderEnum;
    name: string;
    referenceKey: string;
    refreshToken: string;
    scope: string;
    tokenType: string;
}
