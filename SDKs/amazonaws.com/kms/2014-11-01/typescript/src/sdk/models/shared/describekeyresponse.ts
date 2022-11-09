import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyMetadata } from "./keymetadata";


export class DescribeKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyMetadata" })
  keyMetadata?: KeyMetadata;
}
