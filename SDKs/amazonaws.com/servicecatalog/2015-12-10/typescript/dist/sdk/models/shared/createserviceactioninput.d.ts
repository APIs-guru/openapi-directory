import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionDefinitionTypeEnum } from "./serviceactiondefinitiontypeenum";
export declare class CreateServiceActionInput extends SpeakeasyBase {
    acceptLanguage?: string;
    definition: Map<string, string>;
    definitionType: ServiceActionDefinitionTypeEnum;
    description?: string;
    idempotencyToken: string;
    name: string;
}
