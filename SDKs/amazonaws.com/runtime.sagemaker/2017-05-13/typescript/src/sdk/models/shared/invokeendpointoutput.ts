import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvokeEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body: string;
}
