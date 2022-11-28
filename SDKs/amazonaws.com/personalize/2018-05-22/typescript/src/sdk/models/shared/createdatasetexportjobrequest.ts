import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionModeEnum } from "./ingestionmodeenum";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";



export class CreateDatasetExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn: string;

  @SpeakeasyMetadata({ data: "json, name=ingestionMode" })
  ingestionMode?: IngestionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=jobOutput" })
  jobOutput: DatasetExportJobOutput;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
