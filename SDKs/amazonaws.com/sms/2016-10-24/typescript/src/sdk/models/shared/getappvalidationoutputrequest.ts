import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppValidationOutputRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: string;
}
