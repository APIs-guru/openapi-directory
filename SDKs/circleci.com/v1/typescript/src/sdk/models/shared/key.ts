import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KeyTypeEnum {
    DeployKey = "deploy-key"
,    GithubUserKey = "github-user-key"
}


export class Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=type" })
  type?: KeyTypeEnum;
}
