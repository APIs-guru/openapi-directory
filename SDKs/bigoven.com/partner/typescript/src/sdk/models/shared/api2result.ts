import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
