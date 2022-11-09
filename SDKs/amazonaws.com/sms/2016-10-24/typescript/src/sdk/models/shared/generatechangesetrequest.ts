import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputFormatEnum } from "./outputformatenum";


export class GenerateChangeSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=changesetFormat" })
  changesetFormat?: OutputFormatEnum;
}
