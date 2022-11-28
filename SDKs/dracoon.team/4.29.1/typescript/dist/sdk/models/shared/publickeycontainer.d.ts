import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Public key container
**/
export declare class PublicKeyContainer extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: number;
    expireAt?: Date;
    publicKey: string;
    version: string;
}
/**
 * Public key container
**/
export declare class PublicKeyContainerOutput extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: number;
    publicKey: string;
    version: string;
}
