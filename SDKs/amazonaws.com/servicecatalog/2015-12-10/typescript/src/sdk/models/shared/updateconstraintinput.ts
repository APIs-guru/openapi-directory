import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateConstraintInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: string;
}
