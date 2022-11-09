import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClassificationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
