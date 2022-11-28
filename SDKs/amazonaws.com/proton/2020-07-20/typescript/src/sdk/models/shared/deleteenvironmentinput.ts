import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
