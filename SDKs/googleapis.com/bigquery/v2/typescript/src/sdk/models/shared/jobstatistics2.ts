import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BiEngineStatistics } from "./bienginestatistics";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { RoutineReference } from "./routinereference";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
import { DmlStatistics } from "./dmlstatistics";
import { MlStatistics } from "./mlstatistics";
import { BigQueryModelTraining } from "./bigquerymodeltraining";
import { ExplainQueryStage } from "./explainquerystage";
import { TableSchema } from "./tableschema";
import { SearchStatistics } from "./searchstatistics";
import { SparkStatistics } from "./sparkstatistics";
import { QueryTimelineSample } from "./querytimelinesample";
import { QueryParameter } from "./queryparameter";



export class JobStatistics2ReservationUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slotMs" })
  slotMs?: string;
}


export class JobStatistics2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biEngineStatistics" })
  biEngineStatistics?: BiEngineStatistics;

  @SpeakeasyMetadata({ data: "json, name=billingTier" })
  billingTier?: number;

  @SpeakeasyMetadata({ data: "json, name=cacheHit" })
  cacheHit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ddlAffectedRowAccessPolicyCount" })
  ddlAffectedRowAccessPolicyCount?: string;

  @SpeakeasyMetadata({ data: "json, name=ddlDestinationTable" })
  ddlDestinationTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=ddlOperationPerformed" })
  ddlOperationPerformed?: string;

  @SpeakeasyMetadata({ data: "json, name=ddlTargetDataset" })
  ddlTargetDataset?: DatasetReference;

  @SpeakeasyMetadata({ data: "json, name=ddlTargetRoutine" })
  ddlTargetRoutine?: RoutineReference;

  @SpeakeasyMetadata({ data: "json, name=ddlTargetRowAccessPolicy" })
  ddlTargetRowAccessPolicy?: RowAccessPolicyReference;

  @SpeakeasyMetadata({ data: "json, name=ddlTargetTable" })
  ddlTargetTable?: TableReference;

  @SpeakeasyMetadata({ data: "json, name=dmlStats" })
  dmlStats?: DmlStatistics;

  @SpeakeasyMetadata({ data: "json, name=estimatedBytesProcessed" })
  estimatedBytesProcessed?: string;

  @SpeakeasyMetadata({ data: "json, name=mlStatistics" })
  mlStatistics?: MlStatistics;

  @SpeakeasyMetadata({ data: "json, name=modelTraining" })
  modelTraining?: BigQueryModelTraining;

  @SpeakeasyMetadata({ data: "json, name=modelTrainingCurrentIteration" })
  modelTrainingCurrentIteration?: number;

  @SpeakeasyMetadata({ data: "json, name=modelTrainingExpectedTotalIteration" })
  modelTrainingExpectedTotalIteration?: string;

  @SpeakeasyMetadata({ data: "json, name=numDmlAffectedRows" })
  numDmlAffectedRows?: string;

  @SpeakeasyMetadata({ data: "json, name=queryPlan", elemType: ExplainQueryStage })
  queryPlan?: ExplainQueryStage[];

  @SpeakeasyMetadata({ data: "json, name=referencedRoutines", elemType: RoutineReference })
  referencedRoutines?: RoutineReference[];

  @SpeakeasyMetadata({ data: "json, name=referencedTables", elemType: TableReference })
  referencedTables?: TableReference[];

  @SpeakeasyMetadata({ data: "json, name=reservationUsage", elemType: JobStatistics2ReservationUsage })
  reservationUsage?: JobStatistics2ReservationUsage[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: TableSchema;

  @SpeakeasyMetadata({ data: "json, name=searchStatistics" })
  searchStatistics?: SearchStatistics;

  @SpeakeasyMetadata({ data: "json, name=sparkStatistics" })
  sparkStatistics?: SparkStatistics;

  @SpeakeasyMetadata({ data: "json, name=statementType" })
  statementType?: string;

  @SpeakeasyMetadata({ data: "json, name=timeline", elemType: QueryTimelineSample })
  timeline?: QueryTimelineSample[];

  @SpeakeasyMetadata({ data: "json, name=totalBytesBilled" })
  totalBytesBilled?: string;

  @SpeakeasyMetadata({ data: "json, name=totalBytesProcessed" })
  totalBytesProcessed?: string;

  @SpeakeasyMetadata({ data: "json, name=totalBytesProcessedAccuracy" })
  totalBytesProcessedAccuracy?: string;

  @SpeakeasyMetadata({ data: "json, name=totalPartitionsProcessed" })
  totalPartitionsProcessed?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSlotMs" })
  totalSlotMs?: string;

  @SpeakeasyMetadata({ data: "json, name=transferredBytes" })
  transferredBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=undeclaredQueryParameters", elemType: QueryParameter })
  undeclaredQueryParameters?: QueryParameter[];
}
