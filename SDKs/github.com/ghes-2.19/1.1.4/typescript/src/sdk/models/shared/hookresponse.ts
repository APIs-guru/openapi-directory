import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: number;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
