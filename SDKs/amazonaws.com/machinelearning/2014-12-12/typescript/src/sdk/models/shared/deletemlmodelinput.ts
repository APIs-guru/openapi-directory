import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMlModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
