import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppValidationOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;
}
