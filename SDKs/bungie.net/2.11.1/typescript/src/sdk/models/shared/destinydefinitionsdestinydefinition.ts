import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyDefinitionsDestinyDefinition
/** 
 * Provides common properties for destiny definitions.
**/
export class DestinyDefinitionsDestinyDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hash?: number;

  @SpeakeasyMetadata()
  index?: number;

  @SpeakeasyMetadata()
  redacted?: boolean;
}
