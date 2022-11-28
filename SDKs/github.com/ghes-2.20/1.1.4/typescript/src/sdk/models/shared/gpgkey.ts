import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GpgKeyEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}


export class GpgKeySubkeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_certify" })
  canCertify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_encrypt_comms" })
  canEncryptComms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_encrypt_storage" })
  canEncryptStorage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_sign" })
  canSign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: any[];

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_key_id" })
  primaryKeyId?: number;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=raw_key" })
  rawKey?: string;

  @SpeakeasyMetadata({ data: "json, name=subkeys" })
  subkeys?: any[];
}


// GpgKey
/** 
 * A unique encryption key
**/
export class GpgKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_certify" })
  canCertify: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_encrypt_comms" })
  canEncryptComms: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_encrypt_storage" })
  canEncryptStorage: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_sign" })
  canSign: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: GpgKeyEmails })
  emails: GpgKeyEmails[];

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=key_id" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=primary_key_id" })
  primaryKeyId: number;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;

  @SpeakeasyMetadata({ data: "json, name=raw_key" })
  rawKey: string;

  @SpeakeasyMetadata({ data: "json, name=subkeys", elemType: GpgKeySubkeys })
  subkeys: GpgKeySubkeys[];
}
