import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Checksum extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm: string;

  @Metadata({ data: "json, name=hash" })
  hash: string;
}
