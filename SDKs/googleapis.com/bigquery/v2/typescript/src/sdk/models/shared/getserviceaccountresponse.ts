import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
