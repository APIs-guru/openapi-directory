import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreResponsesCountResponce extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;
}
