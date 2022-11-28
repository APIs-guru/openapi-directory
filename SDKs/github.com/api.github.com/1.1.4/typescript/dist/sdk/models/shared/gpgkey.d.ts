import { SpeakeasyBase } from "../../../internal/utils";
export declare class GpgKeyEmails extends SpeakeasyBase {
    email?: string;
    verified?: boolean;
}
export declare class GpgKeySubkeys extends SpeakeasyBase {
    canCertify?: boolean;
    canEncryptComms?: boolean;
    canEncryptStorage?: boolean;
    canSign?: boolean;
    createdAt?: string;
    emails?: any[];
    expiresAt?: string;
    id?: number;
    keyId?: string;
    primaryKeyId?: number;
    publicKey?: string;
    rawKey?: string;
    subkeys?: any[];
}
/**
 * A unique encryption key
**/
export declare class GpgKey extends SpeakeasyBase {
    canCertify: boolean;
    canEncryptComms: boolean;
    canEncryptStorage: boolean;
    canSign: boolean;
    createdAt: Date;
    emails: GpgKeyEmails[];
    expiresAt: Date;
    id: number;
    keyId: string;
    primaryKeyId: number;
    publicKey: string;
    rawKey: string;
    subkeys: GpgKeySubkeys[];
}
