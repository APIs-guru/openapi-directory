import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetParameterGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllParameters" })
  allParameters?: boolean;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;

  @Metadata({ data: "json, name=ParameterNames" })
  parameterNames?: string[];
}
