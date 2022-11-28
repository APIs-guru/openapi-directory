import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroup } from "./dbparametergroup";



export class CreateDbParameterGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroup?: DbParameterGroup;
}
