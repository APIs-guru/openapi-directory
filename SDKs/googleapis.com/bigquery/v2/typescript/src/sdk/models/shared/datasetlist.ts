import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetReference } from "./datasetreference";



export class DatasetListDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetReference" })
  datasetReference?: DatasetReference;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}


export class DatasetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasets", elemType: DatasetListDatasets })
  datasets?: DatasetListDatasets[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
