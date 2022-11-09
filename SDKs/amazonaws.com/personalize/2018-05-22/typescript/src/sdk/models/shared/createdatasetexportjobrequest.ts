import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionModeEnum } from "./ingestionmodeenum";
import { DatasetExportJobOutput } from "./datasetexportjoboutput";


export class CreateDatasetExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetArn" })
  datasetArn: string;

  @Metadata({ data: "json, name=ingestionMode" })
  ingestionMode?: IngestionModeEnum;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;

  @Metadata({ data: "json, name=jobOutput" })
  jobOutput: DatasetExportJobOutput;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
