import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=inlinePdf" })
  inlinePdf?: boolean;

  @Metadata({ data: "json, name=urls" })
  urls: string[];
}
