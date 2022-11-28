import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LibreOfficeConvertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
