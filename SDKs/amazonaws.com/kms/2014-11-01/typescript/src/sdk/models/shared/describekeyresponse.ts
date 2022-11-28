import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyMetadata } from "./keymetadata";



export class DescribeKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyMetadata" })
  keyMetadata?: KeyMetadata;
}
