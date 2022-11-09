import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isStatic" })
  isStatic: boolean;

  @Metadata({ data: "json, name=isSystemPage" })
  isSystemPage: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=template" })
  template: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
