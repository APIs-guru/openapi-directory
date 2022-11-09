import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DocTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents: any[];
}
