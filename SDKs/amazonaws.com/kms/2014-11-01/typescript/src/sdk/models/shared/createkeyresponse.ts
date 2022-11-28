import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyMetadata } from "./keymetadata";



export class CreateKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyMetadata" })
  keyMetadata?: KeyMetadata;
}
