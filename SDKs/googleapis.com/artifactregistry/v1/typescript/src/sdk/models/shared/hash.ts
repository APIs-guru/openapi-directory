import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HashTypeEnum {
    HashTypeUnspecified = "HASH_TYPE_UNSPECIFIED"
,    Sha256 = "SHA256"
,    Md5 = "MD5"
}


// Hash
/** 
 * A hash of file content.
**/
export class Hash extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: HashTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
