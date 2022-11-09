import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetReference } from "./datasetreference";


export class DatasetListDatasets extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetReference" })
  datasetReference?: DatasetReference;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;
}


export class DatasetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets", elemType: shared.DatasetListDatasets })
  datasets?: DatasetListDatasets[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
