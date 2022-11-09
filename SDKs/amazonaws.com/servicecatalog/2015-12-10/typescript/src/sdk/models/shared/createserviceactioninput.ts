import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionDefinitionTypeEnum } from "./serviceactiondefinitiontypeenum";


export class CreateServiceActionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Definition" })
  definition: Map<string, string>;

  @Metadata({ data: "json, name=DefinitionType" })
  definitionType: ServiceActionDefinitionTypeEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
