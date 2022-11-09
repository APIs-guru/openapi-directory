import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Names" })
  names: string[];
}
