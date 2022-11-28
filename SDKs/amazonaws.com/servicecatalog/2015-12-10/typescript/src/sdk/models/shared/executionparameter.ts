import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionParameter
/** 
 * Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.
**/
export class ExecutionParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultValues" })
  defaultValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
