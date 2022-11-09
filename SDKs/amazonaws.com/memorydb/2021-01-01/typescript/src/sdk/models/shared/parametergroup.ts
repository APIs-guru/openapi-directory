import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterGroup
/** 
 * Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.
**/
export class ParameterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Family" })
  family?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
