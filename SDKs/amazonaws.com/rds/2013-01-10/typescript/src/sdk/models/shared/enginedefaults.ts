import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



export class EngineDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}
