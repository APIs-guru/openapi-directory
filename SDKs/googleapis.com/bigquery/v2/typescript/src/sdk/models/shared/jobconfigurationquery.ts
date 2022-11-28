import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=allowLargeResults" })
  allowLargeResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clustering" })
  clustering?: Clustering;

  @SpeakeasyMetadata({ data: "json, name=connectionProperties", elemType: ConnectionProperty })
  connectionProperties?: ConnectionProperty[];

  @SpeakeasyMetadata({ data: "json, name=createDisposition" })
  createDisposition?: string;

  @SpeakeasyMetadata({ data: "json, name=createSession" })
  createSession?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultDataset" })
  defaultDataset?: DatasetReference;

  @SpeakeasyMetadata({ data: "json, name=destinationEncryptionConfiguration" })
  destinationEncryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=destinationTable" })
  destinationTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=flattenResults" })
  flattenResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximumBillingTier" })
  maximumBillingTier?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumBytesBilled" })
  maximumBytesBilled?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterMode" })
  parameterMode?: string;

  @SpeakeasyMetadata({ data: "json, name=preserveNulls" })
  preserveNulls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: QueryParameter })
  queryParameters?: QueryParameter[];

  @SpeakeasyMetadata({ data: "json, name=rangePartitioning" })
  rangePartitioning?: RangePartitioning;

  @SpeakeasyMetadata({ data: "json, name=schemaUpdateOptions" })
  schemaUpdateOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=tableDefinitions", elemType: ExternalDataConfiguration })
  tableDefinitions?: Map<string, ExternalDataConfiguration>;

  @SpeakeasyMetadata({ data: "json, name=timePartitioning" })
  timePartitioning?: TimePartitioning;

  @SpeakeasyMetadata({ data: "json, name=useLegacySql" })
  useLegacySql?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useQueryCache" })
  useQueryCache?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userDefinedFunctionResources", elemType: UserDefinedFunctionResource })
  userDefinedFunctionResources?: UserDefinedFunctionResource[];

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
