import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";



export class UpdateEnvironmentTemplateVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TemplateVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
