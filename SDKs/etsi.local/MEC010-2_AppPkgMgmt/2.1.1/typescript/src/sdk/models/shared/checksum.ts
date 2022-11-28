import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Checksum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash: string;
}
