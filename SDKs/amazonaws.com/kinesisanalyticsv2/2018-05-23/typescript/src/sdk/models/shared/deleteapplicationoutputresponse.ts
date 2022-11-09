import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationOutputResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;
}
