import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreResponsesCountResponce extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;
}
