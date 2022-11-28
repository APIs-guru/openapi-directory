import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterNameValue } from "./parameternamevalue";



export class UpdateParameterGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterNameValues", elemType: ParameterNameValue })
  parameterNameValues: ParameterNameValue[];
}
