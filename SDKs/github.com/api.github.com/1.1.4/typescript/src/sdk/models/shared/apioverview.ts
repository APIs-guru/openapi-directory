import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiOverviewSshKeyFingerprints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SHA256_DSA" })
  sha256Dsa?: string;

  @SpeakeasyMetadata({ data: "json, name=SHA256_RSA" })
  sha256Rsa?: string;
}


// ApiOverview
/** 
 * Api Overview
**/
export class ApiOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: string[];

  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: string[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: string[];

  @SpeakeasyMetadata({ data: "json, name=hooks" })
  hooks?: string[];

  @SpeakeasyMetadata({ data: "json, name=importer" })
  importer?: string[];

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: string[];

  @SpeakeasyMetadata({ data: "json, name=ssh_key_fingerprints" })
  sshKeyFingerprints?: ApiOverviewSshKeyFingerprints;

  @SpeakeasyMetadata({ data: "json, name=verifiable_password_authentication" })
  verifiablePasswordAuthentication: boolean;

  @SpeakeasyMetadata({ data: "json, name=web" })
  web?: string[];
}
