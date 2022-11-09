import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetParameterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
