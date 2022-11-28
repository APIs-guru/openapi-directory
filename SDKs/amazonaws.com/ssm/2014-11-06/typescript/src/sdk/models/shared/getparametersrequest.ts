import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Names" })
  names: string[];

  @SpeakeasyMetadata({ data: "json, name=WithDecryption" })
  withDecryption?: boolean;
}
