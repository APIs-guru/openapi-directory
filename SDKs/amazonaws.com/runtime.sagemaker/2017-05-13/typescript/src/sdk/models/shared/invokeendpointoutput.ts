import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvokeEndpointOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body: string;
}
