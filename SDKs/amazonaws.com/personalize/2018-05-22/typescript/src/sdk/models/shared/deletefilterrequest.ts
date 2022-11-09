import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterArn" })
  filterArn: string;
}
