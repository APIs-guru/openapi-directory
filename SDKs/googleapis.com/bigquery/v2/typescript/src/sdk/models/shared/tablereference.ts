import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TableReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
