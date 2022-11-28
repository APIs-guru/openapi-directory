import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";



export class DbEngineVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbEngineDescription?: string;

  @SpeakeasyMetadata()
  dbEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  defaultCharacterSet?: CharacterSet;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata({ elemType: CharacterSet })
  supportedCharacterSets?: CharacterSet[];
}
