import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterGroup
/** 
 * Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.
**/
export class ParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
