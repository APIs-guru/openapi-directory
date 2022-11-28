import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Private key container
**/
export declare class PrivateKeyContainerOutput extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: number;
    privateKey: string;
    version: string;
}
/**
 * Private key container
**/
export declare class PrivateKeyContainer extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: number;
    expireAt?: Date;
    privateKey: string;
    version: string;
}
