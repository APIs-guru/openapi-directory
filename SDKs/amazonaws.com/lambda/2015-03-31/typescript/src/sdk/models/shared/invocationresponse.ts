import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
