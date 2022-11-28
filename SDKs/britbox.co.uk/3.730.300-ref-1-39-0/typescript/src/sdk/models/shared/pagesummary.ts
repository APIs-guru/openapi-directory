import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isStatic" })
  isStatic: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSystemPage" })
  isSystemPage: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
