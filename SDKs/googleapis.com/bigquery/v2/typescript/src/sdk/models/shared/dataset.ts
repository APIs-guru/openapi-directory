import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetAccessEntry } from "./datasetaccessentry";
import { RoutineReference } from "./routinereference";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";



export class DatasetAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: DatasetAccessEntry;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=groupByEmail" })
  groupByEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=iamMember" })
  iamMember?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=routine" })
  routine?: RoutineReference;

  @SpeakeasyMetadata({ data: "json, name=specialGroup" })
  specialGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=userByEmail" })
  userByEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: TableReference;
}


export class DatasetTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tagKey" })
  tagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValue" })
  tagValue?: string;
}


export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access", elemType: DatasetAccess })
  access?: DatasetAccess[];

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetReference" })
  datasetReference?: DatasetReference;

  @SpeakeasyMetadata({ data: "json, name=defaultCollation" })
  defaultCollation?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultEncryptionConfiguration" })
  defaultEncryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=defaultPartitionExpirationMs" })
  defaultPartitionExpirationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTableExpirationMs" })
  defaultTableExpirationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isCaseInsensitive" })
  isCaseInsensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTimeTravelHours" })
  maxTimeTravelHours?: string;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=storageBillingModel" })
  storageBillingModel?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: DatasetTags })
  tags?: DatasetTags[];
}
