import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DefaultAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: number;

  @Metadata({ data: "json, name=hash_algorithm" })
  hashAlgorithm?: string;

  @Metadata({ data: "json, name=home_dir" })
  homeDir?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pwd_hash" })
  pwdHash?: string;

  @Metadata({ data: "json, name=shell" })
  shell?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: number;
}
