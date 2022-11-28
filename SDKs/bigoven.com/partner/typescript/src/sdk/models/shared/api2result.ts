import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
