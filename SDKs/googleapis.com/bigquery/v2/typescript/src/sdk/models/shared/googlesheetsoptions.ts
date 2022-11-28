import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleSheetsOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: string;

  @SpeakeasyMetadata({ data: "json, name=skipLeadingRows" })
  skipLeadingRows?: string;
}
