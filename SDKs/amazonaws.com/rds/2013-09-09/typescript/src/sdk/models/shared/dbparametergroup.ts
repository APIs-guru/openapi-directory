import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  dbParameterGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;
}
