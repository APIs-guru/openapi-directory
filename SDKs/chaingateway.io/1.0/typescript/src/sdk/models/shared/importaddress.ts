import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ethaddress" })
  ethaddress: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;
}
