import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineDefaults } from "./enginedefaults";



export class DescribeEngineDefaultClusterParametersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  engineDefaults?: EngineDefaults;
}
