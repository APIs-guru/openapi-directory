import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents: any[];
}
