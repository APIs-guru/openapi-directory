import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleSheetsOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: string;

  @Metadata({ data: "json, name=skipLeadingRows" })
  skipLeadingRows?: string;
}
