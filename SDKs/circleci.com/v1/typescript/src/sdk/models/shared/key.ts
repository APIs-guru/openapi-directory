import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KeyTypeEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}


export class Key extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: KeyTypeEnum;
}
