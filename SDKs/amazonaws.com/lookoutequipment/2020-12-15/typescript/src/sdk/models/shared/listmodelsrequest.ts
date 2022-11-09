import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";


export class ListModelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetNameBeginsWith" })
  datasetNameBeginsWith?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=ModelNameBeginsWith" })
  modelNameBeginsWith?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;
}
