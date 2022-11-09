import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Tax extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=employer" })
  employer?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
