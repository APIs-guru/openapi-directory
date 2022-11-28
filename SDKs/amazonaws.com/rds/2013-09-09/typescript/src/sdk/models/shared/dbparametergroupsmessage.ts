import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroup } from "./dbparametergroup";



export class DbParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbParameterGroup })
  dbParameterGroups?: DbParameterGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
