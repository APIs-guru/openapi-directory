import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=authorname" })
  authorname?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=machine_tag" })
  machineTag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;
}
