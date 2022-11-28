import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";



export class ListModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetNameBeginsWith" })
  datasetNameBeginsWith?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=ModelNameBeginsWith" })
  modelNameBeginsWith?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;
}
