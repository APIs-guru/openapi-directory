import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyMetadata } from "./keymetadata";


export class CreateKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyMetadata" })
  keyMetadata?: KeyMetadata;
}
