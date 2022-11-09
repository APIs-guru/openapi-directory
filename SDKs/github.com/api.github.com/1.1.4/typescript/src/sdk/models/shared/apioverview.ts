import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiOverviewSshKeyFingerprints extends SpeakeasyBase {
  @Metadata({ data: "json, name=SHA256_DSA" })
  sha256Dsa?: string;

  @Metadata({ data: "json, name=SHA256_RSA" })
  sha256Rsa?: string;
}


// ApiOverview
/** 
 * Api Overview
**/
export class ApiOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions?: string[];

  @Metadata({ data: "json, name=api" })
  api?: string[];

  @Metadata({ data: "json, name=git" })
  git?: string[];

  @Metadata({ data: "json, name=hooks" })
  hooks?: string[];

  @Metadata({ data: "json, name=importer" })
  importer?: string[];

  @Metadata({ data: "json, name=pages" })
  pages?: string[];

  @Metadata({ data: "json, name=ssh_key_fingerprints" })
  sshKeyFingerprints?: ApiOverviewSshKeyFingerprints;

  @Metadata({ data: "json, name=verifiable_password_authentication" })
  verifiablePasswordAuthentication: boolean;

  @Metadata({ data: "json, name=web" })
  web?: string[];
}
