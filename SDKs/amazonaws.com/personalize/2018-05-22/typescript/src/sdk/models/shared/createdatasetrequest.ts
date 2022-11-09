import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn: string;

  @Metadata({ data: "json, name=datasetType" })
  datasetType: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=schemaArn" })
  schemaArn: string;
}
