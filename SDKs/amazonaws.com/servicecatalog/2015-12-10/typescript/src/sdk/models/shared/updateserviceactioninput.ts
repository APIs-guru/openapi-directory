import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServiceActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
