import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterGroup } from "./parametergroup";



export class DeleteParameterGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterGroup" })
  parameterGroup?: ParameterGroup;
}
