import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceActionDefinitionTypeEnum } from "./serviceactiondefinitiontypeenum";



export class CreateServiceActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DefinitionType" })
  definitionType: ServiceActionDefinitionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
