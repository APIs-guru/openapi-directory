import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputFormatEnum } from "./outputformatenum";



export class GenerateChangeSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=changesetFormat" })
  changesetFormat?: OutputFormatEnum;
}
