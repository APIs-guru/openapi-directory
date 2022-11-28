import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoardCreated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
