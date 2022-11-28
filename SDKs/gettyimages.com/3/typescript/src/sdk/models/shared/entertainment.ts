import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Entertainment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
