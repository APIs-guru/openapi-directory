import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetAccessEntry } from "./datasetaccessentry";
import { RoutineReference } from "./routinereference";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";


export class DatasetAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: DatasetAccessEntry;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=groupByEmail" })
  groupByEmail?: string;

  @Metadata({ data: "json, name=iamMember" })
  iamMember?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=routine" })
  routine?: RoutineReference;

  @Metadata({ data: "json, name=specialGroup" })
  specialGroup?: string;

  @Metadata({ data: "json, name=userByEmail" })
  userByEmail?: string;

  @Metadata({ data: "json, name=view" })
  view?: TableReference;
}


export class DatasetTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=tagKey" })
  tagKey?: string;

  @Metadata({ data: "json, name=tagValue" })
  tagValue?: string;
}


export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=access", elemType: shared.DatasetAccess })
  access?: DatasetAccess[];

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=datasetReference" })
  datasetReference?: DatasetReference;

  @Metadata({ data: "json, name=defaultCollation" })
  defaultCollation?: string;

  @Metadata({ data: "json, name=defaultEncryptionConfiguration" })
  defaultEncryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=defaultPartitionExpirationMs" })
  defaultPartitionExpirationMs?: string;

  @Metadata({ data: "json, name=defaultTableExpirationMs" })
  defaultTableExpirationMs?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isCaseInsensitive" })
  isCaseInsensitive?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=maxTimeTravelHours" })
  maxTimeTravelHours?: string;

  @Metadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.DatasetTags })
  tags?: DatasetTags[];
}
