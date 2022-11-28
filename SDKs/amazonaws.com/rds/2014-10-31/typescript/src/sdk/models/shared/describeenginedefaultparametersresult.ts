import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineDefaults } from "./enginedefaults";



export class DescribeEngineDefaultParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  engineDefaults?: EngineDefaults;
}
