import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentModelsContentTypeDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  whenClause?: string;

  @SpeakeasyMetadata()
  whenValue?: string;
}
