import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResponseItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=result" })
  result: number;
}
