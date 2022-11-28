import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";



export class StartDataIngestionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName: string;

  @SpeakeasyMetadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration: IngestionInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
