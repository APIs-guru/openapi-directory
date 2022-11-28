import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DefaultAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: number;

  @SpeakeasyMetadata({ data: "json, name=hash_algorithm" })
  hashAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=home_dir" })
  homeDir?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pwd_hash" })
  pwdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=shell" })
  shell?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: number;
}
