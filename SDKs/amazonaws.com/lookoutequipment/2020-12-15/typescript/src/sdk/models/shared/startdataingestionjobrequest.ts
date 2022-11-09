import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";


export class StartDataIngestionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @Metadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration: IngestionInputConfiguration;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
