import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IgnoresIgnoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ignoreFlags?: number;

  @SpeakeasyMetadata()
  isIgnored?: boolean;
}
