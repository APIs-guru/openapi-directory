import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceTemplateVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
