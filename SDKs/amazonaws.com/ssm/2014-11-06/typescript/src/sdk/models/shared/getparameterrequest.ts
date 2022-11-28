import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
