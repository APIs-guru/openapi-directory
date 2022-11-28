import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alternateNameEncoding?: string;

  @SpeakeasyMetadata()
  alternateValueEncoding?: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  value: string;
}
