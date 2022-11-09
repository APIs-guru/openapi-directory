import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionParameter
/** 
 * Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.
**/
export class ExecutionParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultValues" })
  defaultValues?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
