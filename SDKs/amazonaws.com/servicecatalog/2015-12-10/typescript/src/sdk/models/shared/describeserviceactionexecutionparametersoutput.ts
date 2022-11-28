import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionParameter } from "./executionparameter";



export class DescribeServiceActionExecutionParametersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceActionParameters", elemType: ExecutionParameter })
  serviceActionParameters?: ExecutionParameter[];
}
