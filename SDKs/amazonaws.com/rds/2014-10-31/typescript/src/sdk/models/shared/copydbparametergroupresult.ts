import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroup } from "./dbparametergroup";



export class CopyDbParameterGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroup?: DbParameterGroup;
}
