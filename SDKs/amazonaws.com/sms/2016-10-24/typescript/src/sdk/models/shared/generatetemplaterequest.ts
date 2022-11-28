import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputFormatEnum } from "./outputformatenum";



export class GenerateTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=templateFormat" })
  templateFormat?: OutputFormatEnum;
}
