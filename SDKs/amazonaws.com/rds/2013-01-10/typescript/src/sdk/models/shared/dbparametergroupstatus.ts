import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbParameterGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupName?: string;

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;
}
