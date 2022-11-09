import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDatasetExportJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
