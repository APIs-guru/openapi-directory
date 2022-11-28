import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionDefinitionTypeEnum } from "./serviceactiondefinitiontypeenum";
/**
 * Detailed information about the self-service action.
**/
export declare class ServiceActionSummary extends SpeakeasyBase {
    definitionType?: ServiceActionDefinitionTypeEnum;
    description?: string;
    id?: string;
    name?: string;
}
