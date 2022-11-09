import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PagesSourceHash extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch: string;

  @Metadata({ data: "json, name=path" })
  path: string;
}
