import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponseItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: number;
}
