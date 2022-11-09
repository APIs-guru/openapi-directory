import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdditionalClientEmailApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email" })
  email?: string;
}
