import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
