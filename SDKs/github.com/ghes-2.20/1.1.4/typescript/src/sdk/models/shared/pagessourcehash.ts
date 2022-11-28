import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PagesSourceHash extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
