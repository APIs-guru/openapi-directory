import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @Metadata({ data: "json, name=filterExpression" })
  filterExpression: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
