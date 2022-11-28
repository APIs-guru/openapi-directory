import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteQueryDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
