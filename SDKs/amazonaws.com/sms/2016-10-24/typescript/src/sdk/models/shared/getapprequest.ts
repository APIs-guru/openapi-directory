import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
