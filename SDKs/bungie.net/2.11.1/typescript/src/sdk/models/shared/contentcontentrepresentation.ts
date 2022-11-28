import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentContentRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  validationString?: string;
}
