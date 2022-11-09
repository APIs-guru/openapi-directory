import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProfitAndLossRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
