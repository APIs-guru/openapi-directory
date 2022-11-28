import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls: string[];
}
