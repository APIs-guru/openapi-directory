import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CharacterSet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterSetDescription?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;
}
