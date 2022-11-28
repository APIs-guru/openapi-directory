import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorsEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: string[];
}
