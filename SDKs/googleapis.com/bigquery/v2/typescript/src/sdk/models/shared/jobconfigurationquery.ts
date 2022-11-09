import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Clustering } from "./clustering";
import { ConnectionProperty } from "./connectionproperty";
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
import { QueryParameter } from "./queryparameter";
import { RangePartitioning } from "./rangepartitioning";
import { ExternalDataConfiguration } from "./externaldataconfiguration";
import { TimePartitioning } from "./timepartitioning";
import { UserDefinedFunctionResource } from "./userdefinedfunctionresource";


export class JobConfigurationQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowLargeResults" })
  allowLargeResults?: boolean;

  @Metadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @Metadata({ data: "json, name=connectionProperties", elemType: shared.ConnectionProperty })
  connectionProperties?: ConnectionProperty[];

  @Metadata({ data: "json, name=createDisposition" })
  createDisposition?: string;

  @Metadata({ data: "json, name=createSession" })
  createSession?: boolean;

  @Metadata({ data: "json, name=defaultDataset" })
  defaultDataset?: DatasetReference;

  @Metadata({ data: "json, name=destinationEncryptionConfiguration" })
  destinationEncryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=destinationTable" })
  destinationTable?: TableReference;

  @Metadata({ data: "json, name=flattenResults" })
  flattenResults?: boolean;

  @Metadata({ data: "json, name=maximumBillingTier" })
  maximumBillingTier?: number;

  @Metadata({ data: "json, name=maximumBytesBilled" })
  maximumBytesBilled?: string;

  @Metadata({ data: "json, name=parameterMode" })
  parameterMode?: string;

  @Metadata({ data: "json, name=preserveNulls" })
  preserveNulls?: boolean;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryParameters", elemType: shared.QueryParameter })
  queryParameters?: QueryParameter[];

  @Metadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @Metadata({ data: "json, name=schemaUpdateOptions" })
  schemaUpdateOptions?: string[];

  @Metadata({ data: "json, name=tableDefinitions", elemType: shared.ExternalDataConfiguration })
  tableDefinitions?: Map<string, ExternalDataConfiguration>;

  @Metadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @Metadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;

  @Metadata({ data: "json, name=useQueryCache" })
  useQueryCache?: boolean;

  @Metadata({ data: "json, name=userDefinedFunctionResources", elemType: shared.UserDefinedFunctionResource })
  userDefinedFunctionResources?: UserDefinedFunctionResource[];

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
