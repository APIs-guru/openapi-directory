import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
