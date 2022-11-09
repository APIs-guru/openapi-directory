import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminateAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
