import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Names" })
  names: string[];

  @Metadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
