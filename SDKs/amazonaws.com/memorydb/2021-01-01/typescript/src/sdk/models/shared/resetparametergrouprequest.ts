import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetParameterGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllParameters" })
  allParameters?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterNames" })
  parameterNames?: string[];
}
