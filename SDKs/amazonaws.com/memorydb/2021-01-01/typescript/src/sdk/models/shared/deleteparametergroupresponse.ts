import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterGroup } from "./parametergroup";


export class DeleteParameterGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterGroup" })
  parameterGroup?: ParameterGroup;
}
