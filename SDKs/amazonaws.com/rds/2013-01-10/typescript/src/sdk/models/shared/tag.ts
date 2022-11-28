import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
