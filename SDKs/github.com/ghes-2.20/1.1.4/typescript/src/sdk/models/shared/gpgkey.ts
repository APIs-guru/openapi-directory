import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GpgKeyEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}


export class GpgKeySubkeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_certify" })
  canCertify?: boolean;

  @Metadata({ data: "json, name=can_encrypt_comms" })
  canEncryptComms?: boolean;

  @Metadata({ data: "json, name=can_encrypt_storage" })
  canEncryptStorage?: boolean;

  @Metadata({ data: "json, name=can_sign" })
  canSign?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=emails" })
  emails?: any[];

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=key_id" })
  keyId?: string;

  @Metadata({ data: "json, name=primary_key_id" })
  primaryKeyId?: number;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;

  @Metadata({ data: "json, name=raw_key" })
  rawKey?: string;

  @Metadata({ data: "json, name=subkeys" })
  subkeys?: any[];
}


// GpgKey
/** 
 * A unique encryption key
**/
export class GpgKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_certify" })
  canCertify: boolean;

  @Metadata({ data: "json, name=can_encrypt_comms" })
  canEncryptComms: boolean;

  @Metadata({ data: "json, name=can_encrypt_storage" })
  canEncryptStorage: boolean;

  @Metadata({ data: "json, name=can_sign" })
  canSign: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=emails", elemType: shared.GpgKeyEmails })
  emails: GpgKeyEmails[];

  @Metadata({ data: "json, name=expires_at" })
  expiresAt: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=key_id" })
  keyId: string;

  @Metadata({ data: "json, name=primary_key_id" })
  primaryKeyId: number;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;

  @Metadata({ data: "json, name=raw_key" })
  rawKey: string;

  @Metadata({ data: "json, name=subkeys", elemType: shared.GpgKeySubkeys })
  subkeys: GpgKeySubkeys[];
}
