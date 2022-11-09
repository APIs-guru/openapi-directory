import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionParameter } from "./executionparameter";


export class DescribeServiceActionExecutionParametersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceActionParameters", elemType: shared.ExecutionParameter })
  serviceActionParameters?: ExecutionParameter[];
}
