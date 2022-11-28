import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
