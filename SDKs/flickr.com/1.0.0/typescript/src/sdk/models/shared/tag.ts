import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=authorname" })
  authorname?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=machine_tag" })
  machineTag?: boolean;

  @Metadata({ data: "json, name=raw" })
  raw?: string;
}
