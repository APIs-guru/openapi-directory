import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=filterExpression" })
  filterExpression: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
