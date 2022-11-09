import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTagOptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
