import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Deduction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
