import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodeScanningSarifsReceipt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
