import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of a CreateParameterGroup operation. A parameter group represents a combination of specific values for the parameters that are passed to the engine software during startup.
**/
export declare class ParameterGroup extends SpeakeasyBase {
    arn?: string;
    description?: string;
    family?: string;
    name?: string;
}
