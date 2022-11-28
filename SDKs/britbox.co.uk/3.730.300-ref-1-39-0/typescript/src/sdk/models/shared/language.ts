import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Language extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
