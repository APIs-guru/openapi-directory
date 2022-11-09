import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=ethaddress" })
  ethaddress: string;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=ok" })
  ok: boolean;
}
