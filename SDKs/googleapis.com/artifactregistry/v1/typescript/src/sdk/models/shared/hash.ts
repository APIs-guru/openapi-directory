import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HashTypeEnum {
    HashTypeUnspecified = "HASH_TYPE_UNSPECIFIED",
    Sha256 = "SHA256",
    Md5 = "MD5"
}


// Hash
/** 
 * A hash of file content.
**/
export class Hash extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: HashTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
